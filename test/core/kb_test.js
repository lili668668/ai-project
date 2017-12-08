const kb = require('../../core/kb.js')
const assert = require('assert')
const faker = require('faker/locale/zh_TW')

var puppy = {
  name: faker.name.findName(),
  type: 'dog',
  sex: 'girl',
  build: 'small',
  age: 'junior',
  contact_phone: faker.phone.phoneNumber(),
  contact_email: faker.internet.email()
}

describe('knowledge base', () => {
  describe('#add_animal', () => {
    it('should return id when add successily', () => {
      return kb.add_animal(puppy)
        .then((result) => {
          puppy.id = result
          assert.ok(true)
        })
    })
  })

  describe('#all_animals', () => {
    it('should return a list of animals', () => {
      return kb.all_animals()
        .then((result) => {assert.ok(result)})
    })
  })

  describe('#find_animal', () => {
    it('should return puppy info', () => {
      return kb.find_animal(puppy.id)
        .then((result) => {assert.ok(puppy.id === result.id)})
    })
  })
})
