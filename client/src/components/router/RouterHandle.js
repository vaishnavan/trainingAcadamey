/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainingList from '../traininglist/TrainingList';
import Dashboard from '../dashboard/Dashboard';
import Login from '../login/Login';
import './routerhandle.css';
import Welcome from '../welcome/Welcome';

class RouterHandle extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/trainings" component={TrainingList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default RouterHandle;
