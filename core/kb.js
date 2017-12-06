const animal_model = require('../models/animal.js')

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
          .then(animals => resolve(animals))
      })
  })
}

module.exports.add_animal = add_animal
module.exports.all_animals = all_animals
