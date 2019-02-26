//dependencies
import React, { Component } from 'react';
import {BrowserRouter as Switch, Route, Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import firebase from 'firebase';
import { login, logout } from './../actions';

//local files
import NavBar from './NavBar/NavBar.jsx';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from './Login';
import HomePage from './HomePage/HomePage.jsx';
import RecipeDetail from './RecipeDetail/RecipeDetail.jsx';
import RecipeEdit from './RecipeEdit.jsx';
import * as actions from './../actions';

//styles
import './App.scss';
import './HomePage/HomePage.scss';
import './NavBar/NavBar.scss';
import './Widgets/SearchBar.scss'
import './Widgets/Animations.scss';
import './RecipeDetail/RecipeDetail.scss';

export const history = createHistory();

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    const { watchUserData, watchRecipes, watchUserLoad } = actions;
    dispatch(watchUserData());
    dispatch(watchRecipes());
    dispatch(watchUserLoad());
  }

  render() {
    return (
      <div>
        <Router history={history}>
        <Switch>
          <div className="contentContainer">
            <NavBar />
            <PublicRoute path='/' component={Login} exact={true}/>
            <PrivateRoute path="/home" component={HomePage}/>
            <PrivateRoute path='/recipe-detail' component={RecipeDetail}/>
            <PrivateRoute path="/edit-recipe" component={RecipeEdit}/>
          </div>
        </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    currentRecipe: state.currentRecipeId,
    loadedInitialState: state.loadedInitialState,
    isRouting: state.isRouting,
    showPopup: state.showPopup
  };
};

export default withRouter(connect(mapStateToProps)(App));
