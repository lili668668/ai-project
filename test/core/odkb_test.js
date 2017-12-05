require('rootpath')()
const odkb = require('core/odkb.js')
const assert = require('assert')

describe('opendata knowledge base', () => {
  describe('#all_od', () => {
    it('should return the list of open data.', () => {
      return odkb.all_od().then((list) => {
        console.log(list)
        assert.ok(true)
      })
    })
  })
})
