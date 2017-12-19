import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import bodyparser from 'body-parser'
import http from 'http'
import socketio from 'socket.io'

import api from './api'

const kb = require('../core/kb.js')
const ieif = require('../core/ieif.js')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

app.use( bodyparser.json() )
app.use( bodyparser.urlencoded({
    extended: true
}) )

app.use(function (req, res, next) {

  res.header('Access-Control-Allow-Origin', ('http://' + host + ":" + port));

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use('/api', api)

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)

// socket
const server = http.createServer(app)
const io = socketio(server)
io.on('connection', (socket) => {
  socket.on('send_message', (pack) => {
    var facts = pack.facts
    var rules = pack.rules
    if (pack.content === '我需要幫助') {
      kb.all_facts_and_rules()
        .then(origin_set => {
          facts = origin_set.facts
          rules = origin_set.rules

          ieif.keep_talk(facts, rules, pack.content)
            .then((entry) => {
              facts = entry.facts
              rules = entry.rules
              socket.emit('push_message', {facts: facts, rules: rules, name: 'chatbot', content: entry.content})
        })
        })
    } else {
      ieif.keep_talk(facts, rules, pack.content)
        .then((entry) => {
          facts = entry.facts
          rules = entry.rules
          socket.emit('push_message', {facts: facts, rules: rules, name: 'chatbot', content: entry.content})
        })
    }

  })

})

server.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
