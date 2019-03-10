import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUserLogin, newUserLogout, changeCurrentRecipe } from '../../../actions';
import { v4 } from 'uuid';

import NavButton from '../NavButton/NavButton';

function MenuModal(props) {
    const { dispatch, mainMenuShowing, onToggleMenu, user } = props;

    //Login OAuth providers
    const handleLogin = (provider) => {
      dispatch(newUserLogin(provider));
      onToggleMenu(mainMenuShowing);
    };

    const handleLogout = () => {
      dispatch(newUserLogout());
      onToggleMenu(mainMenuShowing);
    };

    const handleRoute = (route) => {
      onToggleMenu(mainMenuShowing);
      if (route === '/edit-recipe') {
        const newId = v4();
        dispatch(changeCurrentRecipe(newId, user));
      }
    };

    return (
      <div className={props.mainMenuShowing ? 'menuModal modal-open-style' : 'menuModal'}>
        <div className='modal-top'>
          <i className='material-icons navButtonStyle' onClick={() => {props.onToggleMenu(props.mainMenuShowing);}}>close</i>
        </div>
        <div className='modal-body'>
          <div className='accordion-list'>
            <div className='accordion-footer'>
              { (!props.user.uid || props.user.uid === 'initialLoadUser') && (
                <button className='loginLogout' onClick={() => {handleLogin('google');}}>Login</button>)
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
                  <div onClick={() => {handleRoute('/edit-recipe');}}>
                    <NavButton
                      linkPath='/edit-recipe'
                      linkText='Add Recipe'
                      color='white'
                    />
                  </div>
                  <button className='loginLogout' onClick={() => {handleLogout();}}>Logout</button>
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

// <AccordionItem
//   name = 'what up'
//   submenus = {['hi', 'hello']}
//   modalShowing = {this.props.modalShowing}
// />
