import { Router } from 'express'

const kb = require('../../core/kb.js')
const odkb = require('../../core/odkb.js')
const rx = require('rxjs/Rx')

const router = Router()

router.get('/animals', function (req, res, next) {
  kb.all_animals().then(animals => {
    odkb.all_od().then(list => {
      rx.Observable.from(animals)
        .forEach(animal => {
          list.push(animal)
        }).then(() => res.json(list))
    })
  })
})

/* GET user by ID. */
router.get('/animals/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
