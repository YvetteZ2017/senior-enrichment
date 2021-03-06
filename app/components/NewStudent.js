import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../store';

const NewStudent = (props) => {
    const { handleSubmit, campuses } = props;
    const campusId = +props.match.params.campusId;
    const campus = props.campuses.find(campus => campus.id === campusId);
      return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
            <legend>Create a Student</legend>
            <div className="form-group">
                <label className="col-xs-2 control-label">Name</label>
                <div className="col-xs-10">
                    <input
                    className="form-control"
                    type="text"
                    name="studentName"
                    placeholder="Enter student name"
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="col-xs-2 control-label">Campus</label>
                <div className="col-xs-10">
                {
                  campusId? 
                  (<label>{campus.name}</label>) 
                  : ( <select
                        className="form-control"
                        name="studentCampus">
                        {
                        campuses && campuses.map(campus => (
                            <option key={campus.id} value={campus.id}>{campus.name}</option>
                        ))
                        }
                    </select>)
                }
                </div>
            </div>
            <div className="form-group">
                <label className="col-xs-2 control-label">Image URL</label>
                <div className="col-xs-10">
                    <input
                    className="form-control"
                    type="text"
                    name="studentImage"
                    placeholder="Enter the URL of the student's photo"
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                    <button type="submit" 
                            className="btn btn-default" 
                            >Create Student
                    </button>
                </div>
            </div>
        </fieldset>
        </form>
      );
}


const mapStatesToProps = (state) => (
    {campuses: state.campuses}
)

  
const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleSubmit (event) {
            event.preventDefault();
            const name = event.target.studentName.value;
            const image = event.target.studentImage.value || undefined;
            const campusId = ownProps.match.params.campusId || event.target.studentCampus.value;
            dispatch(postStudent({ name, campusId, image }, ownProps.history));
        }
    };
};
  
export default connect(mapStatesToProps, mapDispatchToProps)(NewStudent);