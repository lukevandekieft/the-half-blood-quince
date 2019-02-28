//dependencies
import React, { Component } from 'react';
import {BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
      <Switch>
        <div className="contentContainer">
          <NavBar />
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={HomePage}/>
          <Route exact path='/recipe-detail' component={RecipeDetail}/>
          <Route exact path='/edit-recipe' component={RecipeEdit}/>
        </div>
      </Switch>
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
