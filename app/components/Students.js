import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentItem from './StudentItem';


const Students = (props) => {
    const students = props.students
    return(
        <div>
            <h3>Students</h3>
            <div className="row">
            {
                students.map(student => (<StudentItem key={student.id} student={student}/>))
            }
            </div>
        </div>
)
};



 
export default connect()(Students);
