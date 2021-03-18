import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { HomeScreenMain, AboutScreenMain} from './components/mainComponentsIndex'

import './App.scss';

const App = () => (

  <Router>
    <Switch>
      <HomeScreenMain/>
      <AboutScreenMain/>
    </Switch>
  </Router>


  // <section className="Section-01">
  //   <Button variant="outline-primary">Primary</Button>{' '}
  //   <p>Test</p>
  // </section>
);

export default App;
