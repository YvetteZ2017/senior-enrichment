'use strict'
const api = require('express').Router();
const db = require('../db');
const { Campus, Student } = require('../db/models');



// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

api.get('/campuses', (req, res, next) => {
	Campus.findAll({include: [{all: true}]})
	.then(campuses => res.json(campuses))
	.catch(next);
});
api.get('/students', (req, res, next) => {
	Student.findAll({include: [{all: true}]})
	.then(students => res.json(students))
	.catch(next);
});

//GET students from a campus
// api.get('/campuses/:campusId/students', (req, res, next) => {
// 	const campusId = req.params.campusId;
// 	Student.findAll({where: { campusId }})
// 	.then(students => res.json(students))
// 	.catch(next);
// });

//GET a campus 
api.get('/campuses/:campusId/', (req, res, next) => {
	Campus.findById(req.params.campusId, {include: [{all: true}]})
	.then(campus => res.json(campus))
	.catch(next);
});

api.get('/students/:studentId', (req, res, next) => {
	Student.findById(req.params.studentId, {include: [{all: true}]})
	.then(student => res.json(student))
	.catch(next);
});

//POST new student   /api/students 
api.post('/students', (req, res, next) => {
	Student.create(req.body)
	.then(newStudent => Student.findById(newStudent.id))
	.then(foundStudent => {
		res.json(foundStudent)})
	.catch(next);
});

//POST new campus   /api/campuses 
api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
	.then(campus => res.json(campus))
	.catch(next);
});

//DELETE a campus   /api/campuses/:campusId
api.delete('/campuses/:campusId', (req, res, next) => {
	const id = req.params.campusId;
	Campus.destroy({ where: { id }})
	.then(() => res.status(204).end())
	.catch(next);
})

//DELETE a student 
api.delete('/students/:studentId', (req, res, next) => {
	const id = req.params.studentId;
	Student.destroy({ where: { id }})
	.then(() => res.status(204).end())
	.catch(next);
})

//PUT single student's info
api.put('/students/:studentId', function (req, res, next) {
	console.log('putting student...')
	const studentId = req.params.studentId;
	Student.update(req.body,{where: {id: studentId}})
		.then(() => Student.findById(studentId))
		.then((student) => res.json(student))
	  	.catch(next);
});

// //PUT single campus's info
api.put('/campuses/:campusId', function (req, res, next) {
	const campusId = req.params.campusId;
	Campus.update(
		req.body,
		{where: {id: campusId}})
		.then(() => Campus.findById(campusId))
		.then((campus) => res.json(campus))
	 	.catch(next);
});


api.use((req, res, next) => {
	res.status(404).send('Not found');
})

module.exports = api