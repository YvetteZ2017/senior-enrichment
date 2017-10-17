const db = require('./db');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');


const students = [
{
    name: 'Snowball',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/9/96/Snowball_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160419060728',
    campusId: 1
}, {
    name: 'Smokey',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/7/79/Smokey_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160718222735',
    campusId: 1
}, {
    name: 'Spots',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/5/50/Spots_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160419070652',
    campusId: 1
}, {
    name: 'Sunny',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/f/f5/Sunny_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160419070825',
    campusId: 2
}, {
    name: 'Fred',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/7/78/Fred_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160419071048',
    campusId: 2
}, {
    name: 'Pumpkin',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/0/01/Pumpkin_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160419071224',
    campusId: 2
}, {
    name: 'Tabitha',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/0/06/Tabitha_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160731203039',
    campusId: 3
}, {
    name: 'Callie',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/e/ee/Callie_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160721165533',
    campusId: 3
}, {
    name: 'Bandit',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/7/70/Bandit_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160719095946',
    campusId: 3
}, {
    name: 'Gabriel',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/d/d6/Gabriel_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160727102116',
    campusId: 3
}, {
    name: 'Marshmallow',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/9/93/Marshmallow_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160730101757',
    campusId: 4
}, {
    name: 'Socks',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/8/83/Socks_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160731112956',
    campusId: 4
}, {
    name: 'Lexy',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/5/50/Lexy_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160728112641',
    campusId: 4
}, {
    name: 'Bolt',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/f/fd/Bolt_Sprite.png/revision/latest/scale-to-width-down/150?cb=20160720195611',
    campusId: 4
}];


const campuses = [
  {
    name: 'Otaru',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/1/16/Rustic_Style.png/revision/latest?cb=20151107131618',
  }, {
    name: 'Takazake',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/b/b3/Cafe_Style.jpg/revision/latest?cb=20161014013312',
}, {
    name: 'Haru',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/2/2b/Sugary_July.png/revision/latest?cb=20160714090042',
}, {
    name: 'Fuyu',
    image: 'https://vignette.wikia.nocookie.net/nekoatsume/images/c/c8/OriginalStyle-snow.JPG/revision/latest?cb=20160203004401',
}];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
