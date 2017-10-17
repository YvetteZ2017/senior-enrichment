import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './Navbar';
import Campuses from './Campuses';
import Students from './Students';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

// import store

export default class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <main>
                    <Switch>
                        <Route exact path="/campuses" component={Campuses} />
                        <Route exact path="/students" component={Students} />
                        <Route path="/campuses/:campusId" component={SingleCampus} />
                        <Route path="/students/:studentId" component={SingleStudent} />
                        <Redirect to="/campuses" />
                    </Switch>
                </main>
            </div>
        );
    }
}