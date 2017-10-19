import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent } from '../store';


const StudentItem = (props) => {
    const student = props.student
    return(
            <div className="col-xs-4 media" key={ student.id }>
                <Link className="thumbnail  media-body" to={`/students/${student.id}`}>
                    <img src={ student.image } />
                    <div className="caption">
                        <h5>
                            <span>name: { student.name }</span>
                        </h5>
                        <h5>
                            <span>campus: { student.campus.name }</span>
                        </h5>
                    </div>
                    </Link>
                <div className="media-right media-middle">
                    <button
                        className="btn btn-default"
                        onClick={props.removeStudent}>
                        <span className="glyphicon glyphicon-remove" />
                    </button>
                </div>
            </div>
            )
};



const mapDispatchToProps = (dispatch, ownProps) => {
    const student = ownProps.student;
    return {
        removeStudent (event) {
            event.stopPropagation();
            dispatch(deleteStudent(student.id))
        }
    }
}

 
export default connect(null, mapDispatchToProps)(StudentItem);
