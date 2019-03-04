//dependencies
import React, { Component } from 'react';
import {BrowserRouter as Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//local files
import MenuModal from './Widgets/MenuModal/MenuModal.jsx';
import NavBar from './NavBar/NavBar.jsx';
import HomePage from './HomePage/HomePage.jsx';
import RecipeDetail from './RecipeDetail/RecipeDetail.jsx';
import RecipeEdit from './RecipeEdit.jsx';
import * as actions from './../actions';
import { toggleMainMenu } from './../actions';

//styles
import './App.scss';
import './HomePage/HomePage.scss';
import './Widgets/MenuModal/MenuModal.scss';
import './NavBar/NavBar.scss';
import './Widgets/SearchBar/SearchBar.scss'
import './Widgets/Animations.scss';
import './RecipeDetail/RecipeDetail.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleToggleMainMenu = this.handleToggleMainMenu.bind(this);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    const { watchUserData, watchRecipes, watchUserLoad } = actions;
    dispatch(watchUserData(this.props.user));
    dispatch(watchRecipes(this.props.user));
    dispatch(watchUserLoad(this.props.user));
  }

  handleToggleMainMenu(menuState) {
    this.props.dispatch(toggleMainMenu(menuState));
  };

  render() {
    console.log(this.props.state);
    const routes = (this.props.user.uid && this.props.user.uid !=='initialLoadUser') ?
      <React.Fragment>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/recipe-detail' component={RecipeDetail}/>
        <Route exact path='/edit-recipe' component={RecipeEdit}/>
      </React.Fragment>
      : <div>Please Log In</div>


    return (
      <Switch>
        <React.Fragment>
        <div className="contentContainer">
          <NavBar
            onToggleMenu = {this.handleToggleMainMenu}
          />
          {routes}
        </div>
        <MenuModal
          onToggleMenu = {this.handleToggleMainMenu}
        />
        <div className={this.props.mainMenuShowing ? 'screen-blocker main-menu-showing' : 'screen-blocker'} onClick={this.handleToggleMainMenu}></div>
        </React.Fragment>
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    currentRecipe: state.currentRecipeId,
    isRouting: state.isRouting,
    loadedInitialState: state.loadedInitialState,
    mainMenuShowing: state.mainMenuShowing,
    recipes: state.recipes,
    showPopup: state.showPopup,
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps)(App));
