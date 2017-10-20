import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Students from './Students';
import store from '../store';


const SingleCampus = (props) => {
    const campus = props.campus;
    const students = props.students;
    return (
        <div>
            <img src={ campus.image } className="campus"/>
            <h3 className="center">{campus.name} Campus</h3>
            <Students students={students}/>
            <div className="row">
            <Link className="link-button btn btn-default" to={`/campuses/${campus.id}/create-new-student`}>Create New Student</Link>
            <Link className="link-button btn btn-default" to={`/campuses/${campus.id}/edit-campus`}>Edit Campus</Link>            
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    const campusId = Number(ownProps.match.params.campusId);
    return {
        campus: state.campuses.find(campus => campus.id === campusId) || {name: ''},
        students: state.students.filter(student => student.campusId === campusId),
        campusId
    }
}

export default connect(mapStateToProps)(SingleCampus);