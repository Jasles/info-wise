import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage.js';
import Cities from './components/Cities.js';
import Events from './components/Events.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ HomePage }/> 
          {/* <Route  path="/cities" component={ Cities}/> */}
          <Route path= "/:stateId" component={ Cities }/>
          <Route path= "/:cityId" component={ Events }/>
        </Switch>
      </Router>
    </div>
  ); 
};

export default App;

