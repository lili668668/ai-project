require('rootpath')()
const Sequelize = require('sequelize')
const db = require('util/db.js')

const animal = db.define('animal', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sex: {
    type: Sequelize.STRING
  },
  build: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.STRING
  },
  chip_num: {
    type: Sequelize.STRING
  },
  isSterilization: {
    type: Sequelize.BOOLEAN
  },
  hair_type: {
    type: Sequelize.STRING
  },
  children_anlong: {
    type: Sequelize.BOOLEAN
  },
  animal_anlong: {
    type: Sequelize.BOOLEAN
  },
  resettlement: {
    type: Sequelize.STRING
  },
  note: {
    type: Sequelize.TEXT("medium")
  },
  contact_phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contact_email: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = animal
