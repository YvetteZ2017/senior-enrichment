import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putCampus } from '../store';

const EditCampus = (props) => {
    const { handleSubmit } = props;
    const campusId = +props.match.params.campusId;
    const campus = props.campuses.find(campus => campus.id === campusId);
    console.log('in EditCampus, campuses: ', props.campuses)
      return (
        <form className="form-horizontal" onSubmit={(event)=>{handleSubmit(event,campusId)}}>
        <fieldset>
            <legend>Edit Campus</legend>
            <div className="form-group">
                <label className="col-xs-2 control-label">Name</label>
                <div className="col-xs-10">
                    <input
                    className="form-control"
                    type="text"
                    defaultValue={campus.name}
                    name="campusName"
                    placeholder="Enter campus name"
                    />
                </div>
            </div>
            <div className="form-group">
            <label className="col-xs-2 control-label">Image URL</label>
            <div className="col-xs-10">
                <input
                className="form-control"
                type="text"
                name="campusImage"
                defaultValue={campus.image}
                placeholder="Enter the URL of the campus's photo"
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


  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit (event,id) {
            event.preventDefault();
            const name = event.target.campusName.value;
            const image = event.target.campusImage.value || undefined;
            dispatch(putCampus({ id, name, image }, ownProps.history));
        }
    };
};

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(EditCampus);