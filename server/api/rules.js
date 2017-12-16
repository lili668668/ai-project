import { Router } from 'express'

const kb = require('../../core/kb.js')
const ie = require('../../core/ie.js')

const router = Router()

router.get('/rules', function (req, res, next) {
  kb.all_rules().then(rules => {
    var send_data = {}
    send_data['tbody'] = rules
    res.json(send_data)
  })
})

router.post('/rules/add', function(req, res, next) {
  var data = req.body
  var rule = ''
  for (var cnt = 0;cnt <= 10;cnt ++) {
    var describe_index = `describe_${cnt}`
    var relation_index = `relation_${cnt}`

    if (!data[describe_index] || !data[relation_index]) {
      break
    }

    var fact = `${data[describe_index]}(${data[relation_index]})`
    if (cnt == 0) {
      rule += fact + ':-'
    } else if (cnt == 1){
      rule += fact
    } else {
      rule += ',' + fact
    }
  }
  if (ie.is_rule(rule)) {
    var entry = { describe: rule }
    kb.add_rule(entry)
  }
  res.redirect('/rules')
})

router.get('/rules/delete/:id', function(req, res, next) {
  kb.delete_rule(req.params.id)
  res.redirect('/rules')
})

export default router
