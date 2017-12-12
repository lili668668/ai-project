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

  describe('#get_describes', () => {
    it('should throw error when all of the facts are not format.', () => {
      assert.throws(() => {ie.get_describes(['fruit(apple)', 'apple'])})
    })

    it('should return ["fruit", "juicy", "sweet"]', () => {
      var expect = ['fruit', 'juicy', 'sweet']
      var actual = ie.get_describes(['fruit(apple)', 'juicy(apple)', 'sweet(apple)'])
      assert.deepEqual(actual, expect)
    })
  })

  describe('#inference', () => {
    it('should throw error when all of the facts are not format.', () => {
      assert.throws(() => {ie.inference(['fruit(apple)', 'apple'], ['fruit(x) :- juicy(x)', 'fruit(x) :- sweet(x)'])})
    })

    it('should throw error when all of the rules are not format.', () => {
      assert.throws(() => {ie.inference(['fruit(apple)'], ['fruit() :- juicy(x)', 'fruit(x) :- sweet(x)'])})
    })

    it('should return true because an apple is juicy.', () => {
      var actual = ie.inference(['juicy(apple)'], [], 'juicy(apple)')
      assert.ok(actual)
    })

    it('should return true because an apple is a fruit.', () => {
      var actual = ie.inference(['juicy(apple)', 'sweet(apple)'], ['fruit(x) :- juicy(x), sweet(x)'], 'fruit(apple)')
      assert.ok(actual)
    })

    it('should return false because an cat is not a fruit.', () => {
      var actual = ie.inference(['cute(cat)', 'water(cat)'], ['fruit(x) :- juicy(x), sweet(x)'], 'fruit(cat)')
      assert.ok(!actual)
    })
  })
})
