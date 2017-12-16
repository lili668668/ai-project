const animal_model = require('../models/animal.js')
const fact_model = require('../models/fact.js')
const rule_model = require('../models/rule.js')
const odkb = require('./odkb.js')
const rx = require('rxjs/Rx')

const add_fact = (fact) => {
  return new Promise((resolve, reject) => {
    return fact_model
      .sync()
      .then(() => fact_model.create(fact).then(result => resolve(result.id)))
  })
}

const all_facts = () => {
  return new Promise((resolve, reject) => {
    return fact_model
      .sync()
      .then(() => {
        return fact_model.findAll()
          .then(facts => resolve(facts))
      })
  })
}

const delete_fact = (fact_id) => {
  return new Promise((resolve, reject) => {
    return fact_model
      .sync()
      .then(() => {
        return fact_model.destroy({
          where: {
            id: fact_id
          }
        })
      })
  })
}

const delete_rule = (rule_id) => {
  return new Promise((resolve, reject) => {
    return rule_model
      .sync()
      .then(() => {
        return rule_model.destroy({
          where: {
            id: rule_id
          }
        })
      })
  })
}

const all_rules = () => {
  return new Promise((resolve, reject) => {
    return rule_model
      .sync()
      .then(() => {
        return rule_model.findAll()
          .then(rules => resolve(rules))
      })
  })
}

const add_rule = (rule) => {
  return new Promise((resolve, reject) => {
    return rule_model
      .sync()
      .then(() => rule_model.create(rule).then(result => resolve(result.id)))
  })
}

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
                }).then(() => {
                  var obj = {
                    error: false,
                    list: list
                  }
                  resolve(obj)
                })
            })
            .catch(() => {
              var obj = {
                error: true,
                list: animals
              }
              resolve(obj)
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
module.exports.add_fact = add_fact
module.exports.delete_fact = delete_fact
module.exports.add_rule = add_rule
module.exports.delete_rule = delete_rule
module.exports.all_animals = all_animals
module.exports.all_facts = all_facts
module.exports.all_rules = all_rules
module.exports.find_animal = find_animal
