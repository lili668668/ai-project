import { Router } from 'express'

const kb = require('../../core/kb.js')

const router = Router()

router.get('/animals', function (req, res, next) {
  kb.all_animals().then(animals => {
    var send_data = {}
    send_data['thead'] = ['id', '名字', '種類', '性別', '位置', '聯絡電話', '聯絡Email']
    send_data['tbody'] = animals
    res.json(send_data)
  })
})

/* GET user by ID. */
router.get('/animals/:id', function (req, res, next) {
  var id = req.params.id
  var send_data = {}

  kb.find_animal(id).then(animal => {
    send_data.animal = animal
    res.json(send_data)
  }).catch(() => res.sendStatus(404))

})

export default router
