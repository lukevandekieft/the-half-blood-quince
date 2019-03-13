//Dependencies
import React, { Component } from 'react';
import {BrowserRouter as Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//local files
import DiscoverPage from './DiscoverPage/DiscoverPage.jsx';
import HomePage from './HomePage/HomePage.jsx';
import LoginPage from './LoginPage/LoginPage.jsx';
import MenuModal from './Widgets/MenuModal/MenuModal.jsx';
import NavBar from './NavBar/NavBar.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import PublicRoute from './Routes/PublicRoute.jsx';
import RecipeDetail from './RecipeDetail/RecipeDetail.jsx';
import RecipeEditPage from './RecipeEditPage/RecipeEditPage.jsx';
import SignUpPage from './SignUpPage/SignUpPage.jsx';
import { toggleMainMenu, checkLoginStatus } from './../actions';

//styles
import './App.scss';
import './DiscoverPage/DiscoverPage.scss';
import './HomePage/HomePage.scss';
import './LoginPage/LoginPage.scss';
import './NavBar/NavBar.scss';
import './RecipeDetail/RecipeDetail.scss';
import './RecipeEditPage/RecipeEditPage.scss';
import './Widgets/MenuModal/MenuModal.scss';
import './Widgets/Loader/Loader.scss';
import './Widgets/NavButton/NavButton.scss';
import './Widgets/SearchBar/SearchBar.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleToggleMainMenu = this.handleToggleMainMenu.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(checkLoginStatus());
  }

  //Change state to show or hide main menu
  handleToggleMainMenu(menuState) {
    this.props.dispatch(toggleMainMenu(menuState));
  }

  render() {
    return (
      <Switch>
        <React.Fragment>
          <div className="siteContainer">
            <NavBar
              onToggleMenu = {this.handleToggleMainMenu}
            />
            <PrivateRoute path='/' component={HomePage}/>
            <PrivateRoute path='/recipe-detail' component={RecipeDetail}/>
            <PrivateRoute path='/edit-recipe' component={RecipeEditPage}/>
            <PrivateRoute path='/discover-recipes' component={DiscoverPage}/>
            <PublicRoute path='/login' component={LoginPage}/>
            <PublicRoute path='/signup' component={SignUpPage}/>
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
    mainMenuShowing: state.mainMenuShowing,
  };
};

App.propTypes = {
  mainMenuShowing: PropTypes.bool,
};

export default withRouter(connect(mapStateToProps)(App));
