import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';
  import React, { Component } from 'react';
  import Mainscreen from "./Mainscreen/Mainscreen.js"
  import Entry from "./Entry/Entry"

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/Entry" exact component={Entry} />
                    <Route path="/" exact component={Mainscreen} />
                </Switch>
            </Router>
        )
    }
}