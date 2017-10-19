import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Campuses from './Campuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NewCampus from './NewCampus';
import NewStudent from './NewStudent';
import EditCampus from './EditCampus';
import EditStudent from './EditStudent';
import store, { fetchCampuses, fetchStudents } from '../store';


export default class Main extends Component {

    componentDidMount () {
        const campusesThunk = fetchCampuses();
        const studentsThunk = fetchStudents();
        store.dispatch(campusesThunk);
        store.dispatch(studentsThunk);
    }

    render() {
        return (
            <div>
                <Navbar />
                <main>
                    <Switch>
                        <Route exact path="/campuses" component={Campuses} />
                        <Route exact path="/students" component={AllStudents} />
                        <Route exact path="/create-new-student" component={NewStudent} />
                        <Route exact path="/campuses/:campusId" component={SingleCampus} />
                        <Route exact path="/students/:studentId" component={SingleStudent} />
                        <Route path="/students/:studentId/edit-student" component={EditStudent} />                        
                        <Route exact path="/create-new-campus" component={NewCampus} />
                        <Route path="/campuses/:campusId/create-new-student" component={NewStudent} />
                        <Route exact path="/campuses/:campusId/edit-campus" component={EditCampus} />
                        <Redirect to="/campuses" />
                    </Switch>
                </main>
            </div>
        );
    }
}