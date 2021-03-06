import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postCampus } from '../store';

const NewCampus = (props) => {
    const { handleSubmit } = props;
      return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
            <legend>Create a Campus</legend>
            <div className="form-group">
                <label className="col-xs-2 control-label">Name</label>
                <div className="col-xs-10">
                    <input
                    className="form-control"
                    type="text"
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
                placeholder="Enter the URL of the campus's photo"
                />
            </div>
        </div>
            <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                    <button type="submit" 
                            className="btn btn-default" 
                            >Create Campus
                    </button>
                </div>
            </div>
        </fieldset>
        </form>
      );
}


  
const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleSubmit (event) {
            event.preventDefault();
            const name = event.target.campusName.value;
            const image = event.target.campusImage.value || undefined;
            dispatch(postCampus({ name, image }, ownProps.history));
        }
    };
};
  
export default connect(null,mapDispatchToProps)(NewCampus);