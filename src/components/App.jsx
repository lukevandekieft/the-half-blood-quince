//dependencies
import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

//local files
import HomePage from './HomePage.jsx'

//styles
import './App.scss';
import sassStyles from './test-sass.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
