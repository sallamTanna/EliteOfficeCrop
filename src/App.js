import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './LandingPage';

class App extends React.Component {

render() {
  return (
    <BrowserRouter >
      <Switch >
        <Route exact path = '/'  component = {  LandingPage  }/>
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
