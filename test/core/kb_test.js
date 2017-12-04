require('rootpath')()
const kb = require('core/kb.js')
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
    it('should return true when add successily', () => {
      return kb.add_animal(puppy)
        .then((result) => {assert.ok(result)})
    })
  })
})
