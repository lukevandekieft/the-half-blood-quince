//dependencies
import React, { Component } from 'react';
import {BrowserRouter as Switch, Route } from 'react-router-dom';

//local files
import NavBar from './NavBar.jsx';
import HomePage from './HomePage.jsx';
import RecipeDetail from './RecipeDetail.jsx';
import RecipeEdit from './RecipeEdit.jsx';

//styles
import './App.scss';
import sassStyles from './test-sass.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <div>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/recipe-detail' component={RecipeDetail}/>
            <Route exact path='/edit-recipe' component={RecipeEdit}/>
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
