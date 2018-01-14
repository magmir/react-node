import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// connect is needed to use action
import { connect } from 'react-redux';

// take all actions that we have defined ans store them as actions obj
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render () {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Header/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/surveys" component={Dashboard}/>
            <Route path="/surveys/new" component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);