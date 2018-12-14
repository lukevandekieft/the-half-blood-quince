//dependencies
import React, { Component } from 'react';
import {BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//local files
import NavBar from './NavBar.jsx';
import HomePage from './HomePage.jsx';
import RecipeDetail from './RecipeDetail.jsx';
import RecipeEdit from './RecipeEdit.jsx';

//styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <div className="contentContainer">
            <NavBar />
            <Route exact path='/' render={()=><HomePage recipes={this.props.recipes} />}/>
            <Route exact path='/recipe-detail' component={RecipeDetail}/>
            <Route exact path='/edit-recipe' component={RecipeEdit}/>
          </div>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.users
  };
};

export default withRouter(connect(mapStateToProps)(App));
