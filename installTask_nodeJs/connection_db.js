const Sequelize = require('sequelize')

const sequelize = new Sequelize('create_task', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize