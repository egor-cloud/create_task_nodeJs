const Sequelize = require('sequelize')

const sequelize = new Sequelize('create_task', 'root', '789qwetgb123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize