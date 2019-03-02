import React from 'react';
import PropTypes from 'prop-types';
import { newUserLogout } from '../../../actions';

import AccordionItem from './AccordionItem';

class MenuModal extends React.Component {
  render () {

    const handleLogout = (event) => {
      event.preventDefault();
      this.props.dispatch(newUserLogout());
    };

    return (
      <div className='modalMenu'>
        <div className={this.props.modalShowing ? 'modal accordion modal-open-style' : 'modal accordion'}>
          <div className='modal-top'>
            <i className='material-icons' onClick={this.props.onToggleModal}>close</i>
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
                    <p>Lorem ipsum dolor sit?</p>
                    <p>Ras sit amet neque arcu. Vivamus faucibus in sapien sit amet dignissim.</p>
                    <a className='btn btn-secondary'>Clickum Ipset</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

MenuModal.propTypes = {

}

export default MenuModal;
