import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCampus } from '../store';


const CampuseItem = (props) => {
  const campus = props.campus;
  return (
            <div className="col-xs-5 media item" key={ campus.id }>
                <Link className="thumbnail media-body" to={`/campuses/${campus.id}`}>
                    <img className="campus" src={ campus.image } />
                    <div className="caption">
                    <h5>
                        <span>{ campus.name }</span>
                    </h5>
                    </div>
                </Link>
                <div className="media-right media-middle">
                        <button
                            className="btn btn-default"
                            onClick={props.removeCampus}>
                            <span className="glyphicon glyphicon-remove" />
                        </button>
                    </div>
            </div>
          
  )
}


const mapDispatchToProps = (dispatch, ownProps) => {
    const campus = ownProps.campus;
    return {
        removeCampus(event) {
            event.stopPropagation();
            dispatch(deleteCampus(campus.id))
        }
    }
}


export default connect(null, mapDispatchToProps)(CampuseItem);