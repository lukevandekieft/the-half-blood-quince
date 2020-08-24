import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUserLogin, newUserLogout } from '../../../actions';
import Button from '@material-ui/core/Button';

import NavButton from '../NavButton/NavButton';

function MenuModal(props) {
  const { dispatch, mainMenuShowing, onToggleMenu, user } = props;

  //Login OAuth providers
  const handleLogin = (provider) => {
    dispatch(newUserLogin(provider));
    onToggleMenu(mainMenuShowing);
  };

    //Logout current user & close modal
  const handleLogout = () => {
    dispatch(newUserLogout());
    onToggleMenu(mainMenuShowing);
  };

    //Close modal on click and create new recipe if going to 'edit-recipe' route
  const handleRoute = (route) => {
    onToggleMenu(mainMenuShowing);
  };

  return (
    <div className={props.mainMenuShowing ? 'menuModal modal-open-style' : 'menuModal'}>
      <div className='modal-top'>
        <i className='material-icons' onClick={() => {props.onToggleMenu(props.mainMenuShowing);}} tabIndex="0">close</i>
      </div>
      <div className='modal-body'>
        <div className='accordion-list'>
          <div className='accordion-footer'>
            { (!props.user.uid || props.user.uid === 'initialLoadUser') && (
              <button className='loginLogout button-white' onClick={() => {handleLogin('google');}}>Login</button>)
            }
            { (props.user.uid && props.user.uid !== 'initialLoadUser') && (
              <React.Fragment>
                <div onClick={() => {handleRoute('/');}}>
                  <NavButton
                    linkPath='/'
                    linkText='View Recipes'
                    color='white'
                  />
                </div>
                <div onClick={() => {handleRoute('/discover-recipes');}}>
                  <NavButton
                    linkPath='/discover-recipes'
                    linkText='Discover Recipes'
                    color='white'
                  />
                </div>
                <div onClick={() => {handleRoute('/add-recipe');}}>
                  <NavButton
                    linkPath='/add-recipe'
                    linkText='Add Recipe'
                    color='white'
                  />
                </div>
                <Button className='loginLogout button-white' onClick={() => {handleLogout();}} variant="contained">Logout</Button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mainMenuShowing: state.mainMenuShowing,
    user: state.user,
  };
};

MenuModal.propTypes = {
  mainMenuShowing: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  user: PropTypes.any,
};

export default connect(mapStateToProps)(MenuModal);