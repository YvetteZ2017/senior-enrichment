const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // email: {
    //     type: Sequelize.STRING,
    //     defaultValue: function() {
    //         return this.name + Math.floor(Math.random()*9)+'@gmail.com';
    //     }
    // },
    image: {
        type: Sequelize.TEXT,
        defaultValue: function() {
            return getRandomImage();
        }
    }
});

const images = [
    "https://vignette.wikia.nocookie.net/nekoatsume/images/7/73/Joe_DiMeowgio.png/revision/latest/scale-to-width-down/50?cb=20151108112552",
    "https://vignette.wikia.nocookie.net/nekoatsume/images/2/2d/Senor_don_gato.png/revision/latest/scale-to-width-down/50?cb=20151108112333",
    "https://vignette.wikia.nocookie.net/nekoatsume/images/f/fb/Guy.png/revision/latest/scale-to-width-down/45?cb=20151105120023",
    "https://vignette.wikia.nocookie.net/nekoatsume/images/9/9d/Whiteshadow.png/revision/latest/scale-to-width-down/50?cb=20161218130738"
]

function getRandomImage () {
    return images[Math.floor((Math.random()*images.length))]
};

