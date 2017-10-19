import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Campuses from './Campuses';
import AllStudents from './AllStudents';

const Navbar = () => (
    <nav className="navbar fixed-top navbar-default">
        <div className="container">
            <ul className="nav navbar-nav">
                <li>
                <NavLink to="/campuses" activeClassName="active">Home</NavLink>
                </li>
                <li>
                <NavLink to="/students" activeClassName="active">Students</NavLink>
                </li>
            </ul>
            
        </div>
    </nav>
);    

export default Navbar;
    

