const animal_model = require('../models/animal.js')
const odkb = require('./odkb.js')
const rx = require('rxjs/Rx')

const add_animal = (animal) => {
  return new Promise((resolve, reject) => {
      return animal_model
        .sync()
        .then(() => animal_model.create(animal).then(result => resolve(result.id)))
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

const find_animal = (id) => {
  return new Promise((resolve, reject) => {
    return odkb.all_od().then(list => {
      return rx.Observable.from(list)
        .find(item => item.id === id)
        .toPromise()
        .then(animal => {
          if (animal) {
            resolve(animal)
          } else {
            return animal_model.findOne({
              where: {
                id: id
              }
            }).then(result => resolve(result))
          }
        })
    })
  })
}

module.exports.add_animal = add_animal
module.exports.all_animals = all_animals
module.exports.find_animal = find_animal
