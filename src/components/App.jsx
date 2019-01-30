//dependencies
import React, { Component } from 'react';
import {BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//local files
import NavBar from './NavBar/NavBar.jsx';
import HomePage from './HomePage/HomePage.jsx';
import RecipeDetail from './RecipeDetail/RecipeDetail.jsx';
import RecipeEdit from './RecipeEdit.jsx';
import * as actions from './../actions';

//styles
import './App.scss';
import './HomePage/HomePage.scss';
import './NavBar/NavBar.scss';
import './Widgets/Animations.scss';

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
        <Switch>
          <div className="contentContainer">
            <NavBar />
            <Route exact path='/' render={()=><HomePage
              recipes={this.props.recipes}
              currentRecipe={this.props.currentRecipe}
              loadedInitialState={this.props.loadedInitialState}
            />}/>
            <Route exact path='/recipe-detail' render={()=><RecipeDetail
              recipes={this.props.recipes}
              currentRecipe={this.props.currentRecipe}
              loadedInitialState={this.props.loadedInitialState}
              dispatch={this.props.dispatch}
              showPopup={this.props.showPopup}
            />}/>
            <Route exact path='/edit-recipe' render={()=><RecipeEdit
              recipes={this.props.recipes}
              currentRecipe={this.props.currentRecipe}
              loadedInitialState={this.props.loadedInitialState}
            />}/>
          </div>
        </Switch>
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
