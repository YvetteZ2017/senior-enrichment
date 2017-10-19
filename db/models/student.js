const Sequelize = require('sequelize');
const db = require('../');
const Campus = require('./campus');

module.exports = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
        defaultValue: function() {
            return getRandomImage();
        }
    }
}, {
    defaultScope: {
        include: [Campus]
    }
});

const images = [
    "https://vignette.wikia.nocookie.net/nekoatsume/images/2/2a/Saint_Purrtrick_Sprite.png/revision/latest/scale-to-width-down/90?cb=20160719234642",
    "https://vignette.wikia.nocookie.net/nekoatsume/images/d/de/Sprite_Joe_DiMeowgio.png/revision/latest/scale-to-width-down/60?cb=20160715215413",
    "https://vignette.wikia.nocookie.net/nekoatsume/images/d/df/MsFortune_Sprite.png/revision/latest/scale-to-width-down/80?cb=20160719234049",
    "https://vignette.wikia.nocookie.net/nekoatsume/images/2/22/Guy_Furry_Sprite.png/revision/latest/scale-to-width-down/70?cb=20160720133930",
    "https://vignette.wikia.nocookie.net/nekoatsume/images/b/b7/Kathmandu_Sprite.png/revision/latest?cb=20160719234614",
    "https://vignette.wikia.nocookie.net/nekoatsume/images/1/10/XerxesIX_Sprite.png/revision/latest?cb=20160718155301"
]

function getRandomImage () {
    return images[Math.floor((Math.random()*images.length))]
};

