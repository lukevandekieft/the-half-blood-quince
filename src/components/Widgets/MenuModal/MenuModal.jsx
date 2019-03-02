import React from 'react';
import PropTypes from 'prop-types';
import { newUserLogout } from '../../../actions';

class MenuModal extends React.Component {
  render () {

    const handleLogout = (event) => {
      event.preventDefault();
      this.props.dispatch(newUserLogout());
    };

    return (
      <div className='modalMenu'>
        <button className='loginLogout' onClick={handleLogout}>Logout</button>
      </div>
    );
  };
}

MenuModal.propTypes = {

}

export default MenuModal;
