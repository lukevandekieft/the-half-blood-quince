import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUserLogout, changeCurrentRecipe } from '../../../actions';
import { v4 } from 'uuid';
import { Redirect } from 'react-router';

import AccordionItem from './AccordionItem';
import NavButton from '../NavButton/NavButton';

class MenuModal extends React.Component {

  render () {
    const { dispatch, isRouting, mainMenuShowing, onToggleMenu, user } = this.props;

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

    if (isRouting === true) {
      return <Redirect to='/recipe-detail' />
    }

    return (
      <div className={this.props.mainMenuShowing ? 'menuModal modal-open-style' : 'menuModal'}>
        <div className='modal-top'>
          <i className='material-icons navButtonStyle' onClick={() => {this.props.onToggleMenu(this.props.mainMenuShowing)}}>close</i>
        </div>
        <div className='modal-body'>
          <div className='accordion-list'>
              <div className='accordion-footer'>
                <div onClick={() => {handleRoute('/')}}>
                  <NavButton
                    linkPath='/'
                    linkText='View Recipes'
                    color='white'
                  />
                </div>
                <div onClick={() => {handleRoute('/edit-recipe')}}>
                  <NavButton
                  linkPath='/edit-recipe'
                  linkText='Add Recipe'
                  color='white'
                  />
                </div>
                <button className='loginLogout' onClick={() => {handleLogout()}}>Logout</button>
              </div>
          </div>
        </div>
      </div>
    );
  };
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
}

export default connect(mapStateToProps)(MenuModal);

// <AccordionItem
//   name = 'what up'
//   submenus = {['hi', 'hello']}
//   modalShowing = {this.props.modalShowing}
// />
