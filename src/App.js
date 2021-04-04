import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { HomeScreenMain, AboutScreenMain } from './components/mainComponentsIndex'

import './App.scss';

const App = () => (

  <Router>
    <Switch>
      <Route exact path="/">
        <HomeScreenMain/>
      </Route>
      <Route exact path="/about">
        <AboutScreenMain/>
      </Route>
      <Route exact path="/blog" render={() => (window.location = 'https://artwilton.medium.com/')} />
    </Switch>
  </Router>


  // <section className="Section-01">
  //   <Button variant="outline-primary">Primary</Button>{' '}
  //   <p>Test</p>
  // </section>
);

export default App;
