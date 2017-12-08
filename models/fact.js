const Sequelize = require('sequelize')
const db = require('../util/db.js')

const fact = db.define('fact', {
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

module.exports = fact
