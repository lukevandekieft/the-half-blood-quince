import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUserLogout } from '../../../actions';

import AccordionItem from './AccordionItem';

class MenuModal extends React.Component {

  render () {

    const handleLogout = () => {
      this.props.dispatch(newUserLogout());
      console.log('whatup');
    };

    return (
      <div className={this.props.mainMenuShowing ? 'menuModal modal-open-style' : 'menuModal'}>
        <div className='modal-top'>
          <i className='material-icons' onClick={() => {this.props.onToggleMenu(this.props.mainMenuShowing)}}>close</i>
        </div>
        <div className='modal-body'>
          <div className='accordion-list'>
              <div className='accordion-footer'>
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
  };
};

MenuModal.propTypes = {
  mainMenuShowing: PropTypes.bool,
  onToggleMenu: PropTypes.func,
}

export default connect(mapStateToProps)(MenuModal);

// <AccordionItem
//   name = 'what up'
//   submenus = {['hi', 'hello']}
//   modalShowing = {this.props.modalShowing}
// />
