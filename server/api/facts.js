import { Router } from 'express'

const kb = require('../../core/kb.js')
const ie = require('../../core/ie.js')

const router = Router()

router.get('/facts', function (req, res, next) {
  kb.all_facts().then(facts => {
    var send_data = {}
    send_data['tbody'] = facts
    res.json(send_data)
  })
})

router.post('/facts/add', function(req, res, next) {
  var data = req.body
  var fact = `${data.describe}(${data.relation})`
  if (ie.is_fact(fact)) {
    var entry = { describe: fact }
    kb.add_fact(entry)
  }
  res.redirect('/facts')
})

router.get('/facts/delete/:id', function(req, res, next) {
  kb.delete_fact(req.params.id)
  res.redirect('/facts')
})

export default router
