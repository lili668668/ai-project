require('rootpath')()
const db = require('util/db.js')
const assert = require('assert')

describe('util/database', () => {
  describe('# init', () => {
    it('should can connection', () => {
      db.authenticate()
        .then(() => {
          assert.ok(true)
        })
        .catch(err => {
          assert.fail('there is error: ' + err)
        })
    })
  })
})
