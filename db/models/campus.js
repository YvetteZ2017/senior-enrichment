const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define('campus',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT
    }
})