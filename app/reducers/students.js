import axios from 'axios';


//----------------------------------------------------
const GET_STUDENTS = 'GET_STUDENTS';


//----------------------------------------------------
export function getStudents (students) {
    const action = { type: GET_STUDENTS, students };
    return action;
}

//----------------------------------------------------
export function fetchStudents () {
    
    return function thunk (dispatch) {
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => {
            dispatch(getStudents(students))}
            );
    }
}

//----------------------------------------------------
export default function reducer (students=[], action) {
    switch (action.type) {

        case GET_STUDENTS:
            return action.students;
            
        default:
        return campuses;
    }
}