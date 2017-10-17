import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';


const initialState = {
    campuses: [],
    students: []
}

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_STUDENTS = 'GET_STUDENTS';


export function getCampuses (campuses) {
    const action = { type: GET_CAMPUSES, campuses };
    return action;
}

export function getStudents (students) {
    const action = { type: GET_STUDENTS, students };
    return action;
}


export function fetchCampuses () {

    return function thunk (dispatch) {
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => {
            dispatch(getCampuses(campuses))}
            );
    }
}
    

function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return Object.assign({}, state, {campuses: action.campuses});
        case GET_STUDENTS:
            return Object.assign({}, state, {campuses: action.students});
            

    }
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))
