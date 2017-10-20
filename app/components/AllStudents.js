import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Students from './Students';


const AllStudents = (props) => {
    const students = props.students;
    return (
        <div>
            <Students students={students}/>
            <Link className="btn btn-default link-button" to={'/create-new-student'}>Create New Student</Link>
        </div>
    )
}
  
const mapStateToProps = (state) => {
    return {students: state.students}
}


export default connect(mapStateToProps)(AllStudents);
