import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUserLogout } from '../../../actions';

import AccordionItem from './AccordionItem';

class MenuModal extends React.Component {

  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(newUserLogout());
  };

  render () {
    return (
      <div className={this.props.mainMenuShowing ? 'menuModal modal-open-style' : 'menuModal'}>
        <div className='modal-top'>
          <i className='material-icons' onClick={() => {this.props.onToggleMenu(this.props.mainMenuShowing)}}>close</i>
        </div>
        <div className='modal-body'>
          <div className='modal-container'>
            <div className='accordion-list'>
                  <AccordionItem
                    name = 'what up'
                    submenus = {['hi', 'hello']}
                    modalShowing = {this.props.modalShowing}
                  />
                <div className='accordion-footer'>
                </div>
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
