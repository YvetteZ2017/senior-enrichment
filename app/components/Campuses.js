import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SingleCampus from './SingleCampus';
import { setCurrentCampus } from '../store';

const Campuses = (props) => {
    const campuses = props.campuses;
    return(
        <div>
        <h3>Campuses</h3>
        <div className="row">
          {
            campuses.map(campus => (
              <div className="col-xs-4" key={ campus.id }>
                <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                  <img src={ campus.image } />
                  <div className="caption">
                    <h5>
                      <span>{ campus.name }</span>
                    </h5>
                  </div>
                </Link>
              </div>
            ))
        }
      </div>
    </div>
)
}

const mapStateToProps = (state) => ({
    campuses: state.campuses
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: function (campusName) {
            console.log('Handle Click', campusName);
            dispatch(setCurrentCampus(campusName));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);