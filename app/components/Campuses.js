import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleCampus from './SingleCampus';
import CampusItem from './CampusItem';

const Campuses = (props) => {
  const campuses = props.campuses;
  return(
    <div>
      <h3>Campuses</h3>
      <div className="row">
        {
          campuses.map(campus => (<CampusItem key={campus.id} campus={campus} />))
        }
      </div>
      <Link className="link-button" to={'/create-new-campus'}>Create New Campus</Link>      
      </div>
  )
}


const mapStateToProps = (state) => {
  return {campuses: state.campuses}
}


export default connect(mapStateToProps)(Campuses);