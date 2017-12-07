const animal_model = require('../models/animal.js')
const odkb = require('./odkb.js')
const rx = require('rxjs/Rx')

const add_animal = (animal) => {
  return new Promise((resolve, reject) => {
      return animal_model
        .sync()
        .then(() => animal_model.create(animal))
        .then(() => resolve(true))
        .catch(() => resolve(false))
    })
}

const all_animals = () => {
  return new Promise((resolve, reject) => {
    return animal_model
      .sync()
      .then(() => {
        return animal_model.findAll()
          .then(animals => {
            return odkb.all_od().then(list => {
              return rx.Observable.from(animals)
                .forEach(animal => {
                  list.push(animal)
                }).then(() => resolve(list))
            })
          })
      })
  })
}

module.exports.add_animal = add_animal
module.exports.all_animals = all_animals
