import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Students from './Students';
import store from '../store';


const SingleStudent = (props) => {
    const student = props.student;
    const campuses = props.campuses;
    const campus = campuses.find(campus => campus.id === student.campusId);
    return (
        <div>
            <img src={ student.image } />
            <ul>
                <li>name: {student.name}</li>
                {campus && <li><Link to={`/campuses/${campus.id}`}>campus: {campus.name}</Link></li>}
            </ul>
            <Link className="link-button" to={`/students/${student.id}/edit-student`}>Edit Student</Link>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    const studentId = Number(ownProps.match.params.studentId);
    return {
        student: state.students.find(student => student.id === studentId) || {name: ''},
        campuses: state.campuses
    }
}

export default connect(mapStateToProps)(SingleStudent);