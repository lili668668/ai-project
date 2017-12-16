import { Router } from 'express'

const kb = require('../../core/kb.js')

const router = Router()

router.get('/animals', function (req, res, next) {
  kb.all_animals().then(obj => {
    var send_data = {}
    send_data['thead'] = ['id', '名字', '種類', '性別', '位置', '聯絡電話', '聯絡Email']
    send_data['tbody'] = obj.list
    send_data['error'] = obj.error
    res.json(send_data)
  })
})

/* GET user by ID. */
router.get('/animals/:id', function (req, res, next) {
  var id = req.params.id
  var send_data = {}

  kb.find_animal(id).then(result => {
    if (result.animal) {
      res.json(result)
    } else {
      res.sendStatus(404)
    }
  }).catch(() => res.sendStatus(404))

})

router.post('/animals/add', function(req, res, next) {
  var data = req.body
  kb.add_animal(data)
  res.redirect('/animals')
})

router.get('/animals/delete/:id', function(req, res, next) {
  kb.delete_animal(req.params.id)
  res.redirect('/animals')
})

export default router
