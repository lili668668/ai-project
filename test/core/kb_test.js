require('rootpath')()
const kb = require('core/kb.js')
const assert = require('assert')

describe('knowledge base', () => {
  describe('#add_animal', () => {
    it('should return true when add successily', () => {
      animal = {
        name: '旺旺',
        age: '年輕',
        kind: '哈士奇犬',
        sex: '母'
      }
      assert.ok(kb.add_aanimal(animal))
    })
  })
})
