import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putStudent } from '../store';

const EditStudent = (props) => {
    console.log('in EditStudent component...')
    const { handleSubmit, students, campuses } = props;
    const studentId = +props.match.params.studentId;
    const student = students.find(student => student.id ===studentId);
    console.log('students: ', students)
    console.log('studentId: ', studentId)
    const campus = campuses.find(campus => campus.id === student.campusId);
      return (
        <form className="form-horizontal" onSubmit={(event) => handleSubmit(event, studentId)}>
        <fieldset>
            <legend>Edit Student</legend>
            <div className="form-group">
                <label className="col-xs-2 control-label">Name</label>
                <div className="col-xs-10">
                    <input
                    className="form-control"
                    type="text"
                    name="studentName"
                    placeholder="Enter student name"
                    defaultValue={student.name}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="col-xs-2 control-label">Campus</label>
                <div className="col-xs-10">
                    <select
                        className="form-control"
                        name="studentCampus">
                        <option value={campus.id} selected="selected">{campus.name}</option>
                        {
                        campuses && (campuses.filter(campus => campus.id !== student.campusId).map(campus => (
                            <option key={campus.id} value={campus.id}>{campus.name}</option>
                        ))
                    
                        )
                        }
                    </select>
                
                </div>
            </div>
            <div className="form-group">
                <label className="col-xs-2 control-label">Image URL</label>
                <div className="col-xs-10">
                    <input
                    className="form-control"
                    type="text"
                    name="studentImage"
                    defaultValue={student.image}
                    placeholder="Enter the URL of the student's photo"
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                    <button type="submit" 
                            className="btn btn-default" 
                            >Submit Change
                    </button>
                </div>
            </div>
        </fieldset>
        </form>
      );
}


const mapStatesToProps = (state) => {
    console.log('mapping states....');
    return {
        students: state.students,
        campuses: state.campuses
    }
}

  
const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleSubmit (event, id) {
            console.log('mapping dispatch in edit student.....')
            event.preventDefault();
            const name = event.target.studentName.value;
            const campusId = event.target.studentCampus.value;
            const image = event.target.studentImage.value || undefined;
            dispatch(putStudent({ id, name, campusId, image }, ownProps.history));
        }
    };
};
  
export default connect(mapStatesToProps, mapDispatchToProps)(EditStudent);