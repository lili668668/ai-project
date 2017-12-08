const ie = require('../../core/ie.js')
const assert = require('assert')
const faker = require('faker/locale/zh_TW')

describe('inference engine', () => {
  describe('#is_fact', () => {
    it('should return true when the string is fact', () => {
      assert.ok(ie.is_fact('fruit(apple)'))
    })

    it('should return false when the string is not fact', () => {
      assert.ok(!ie.is_fact('fruit()'))
    })

    it('should return false when the object is not string', () => {
      assert.ok(!ie.is_fact({}))
    })
  })
})
