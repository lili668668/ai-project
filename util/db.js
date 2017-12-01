require('rootpath')()
const Sequelize = require('sequelize')
const config = require('config.js')

const db = new Sequelize(
    config.database.name, 
    config.database.username, 
    config.database.password, 
    config.database.other)

module.exports = db
