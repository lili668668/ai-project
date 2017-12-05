require('rootpath')()
const animal_model = require('models/animal.js')

const add_animal = (animal) => {
  return new Promise((resolve, reject) => {
      return animal_model
        .sync()
        .then(() => animal_model.create(animal))
        .then(() => resolve(true))
        .catch(() => resolve(false))
    })
}

exports.add_animal = add_animal
