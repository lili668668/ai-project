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

    it('should return false when the string is not fact', () => {
      assert.ok(!ie.is_fact('fruit'))
    })

    it('should return false when the object is not string', () => {
      assert.ok(!ie.is_fact({}))
    })
  })

  describe('#is_rule', () => {
    it('should return true when the string is rule', () => {
      assert.ok(ie.is_rule('fruit(x) :- juicy(x)'))
    })

    it('should return true when the string is rule', () => {
      assert.ok(ie.is_rule('fruit(x) :- juicy(x), sweet(x)'))
    })

    it('should return false when the string is not rule. It is a fact.', () => {
      assert.ok(!ie.is_rule('fruit(x)'))
    })

    it('should return false when the string is not rule. It is not format.', () => {
      assert.ok(!ie.is_rule('fruit(x) :- '))
    })

    it('should return false when the string is not rule. Its fact is not format.', () => {
      assert.ok(!ie.is_rule('fruit(x) :- joycy(x), sweet()'))
    })

    it('should return false when the object is not string.', () => {
      assert.ok(!ie.is_rule([]))
    })
  })

  describe('#inference', () => {
    it('should throw error when all of the facts are not format.', () => {
      try {
        ie.inference(['fruit(apple)', 'apple'], ['fruit(x) :- juicy(x)', 'fruit(x) :- sweet(x)'])
      } catch (err) {
        should.exist(err).and.be.an.instanceOf(Error).with.property('message', 'One of the fact is not correct.')
      }
      assert.throws(ie.inference(['fruit(apple)', 'apple'], ['fruit(x) :- juicy(x)', 'fruit(x) :- sweet(x)']), Error, 'One of the fact is not correct.')
    })
  })
})
