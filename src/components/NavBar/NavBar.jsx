import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo.jsx';
import { Link } from 'react-router-dom';
import { newUserLogin } from '../../actions';

class NavBar extends React.Component{

  render() {
    return (
      <div>
        <div className='navContainer'>
          <div className='pageContentSection navBar'>
            <Link to='/'><Logo /></Link>
            <h1>The Half-Blood Quince</h1>
            <i className="fas fa-bars navButtonStyle" onClick={() => {this.props.onToggleMenu(this.props.mainMenuShowing)}}></i>
          </div>
        </div>
        <div className='navBarBackground'></div>
      </div>
    );
  }
}

NavBar.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default NavBar;
