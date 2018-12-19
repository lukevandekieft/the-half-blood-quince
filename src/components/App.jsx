//dependencies
import React, { Component } from 'react';
import {BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//local files
import NavBar from './NavBar.jsx';
import HomePage from './HomePage.jsx';
import RecipeDetail from './RecipeDetail.jsx';
import RecipeEdit from './RecipeEdit.jsx';
import * as actions from './../actions';

//styles
import './App.scss';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    const { watchUserData } = actions;
    dispatch(watchUserData());
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
            />}/>
            <Route exact path='/recipe-detail' render={()=><RecipeDetail
              recipes={this.props.recipes}
              currentRecipe={this.props.currentRecipe}
            />}/>
            <Route exact path='/edit-recipe' component={RecipeEdit}/>
          </div>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    currentRecipe: state.currentRecipeId
  };
};

export default withRouter(connect(mapStateToProps)(App));
