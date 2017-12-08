const Sequelize = require('sequelize')
const db = require('../util/db.js')

const rule = db.define('rule', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  describe: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = rule
