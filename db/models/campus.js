const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define('campus',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
        defaultValue: "https://az616578.vo.msecnd.net/files/2016/02/26/635921135158591971481836251_2016-02-08%2011.23.25.jpg"
    }
})


