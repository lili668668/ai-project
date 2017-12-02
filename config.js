const Sequelize = require('sequelize')

const config = {
  database: {
    name: 'knowledge_base',
    username: process.env.npm_package_config_db_username,
    password: process.env.npm_package_config_db_password,
    other: {
      dialect: 'sqlite',
      operatorsAliases: Sequelize.Op,
      storage: 'knowledge_base.sqlite'
    }
  }
}

module.exports = config

