import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar(props){
  return (
    <div className='navContainer'>
      <div className='pageContentSection navBar'>
        <Link to='/'><Logo /></Link>
        <h1>The Half-Blood Quince</h1>
        <i className="fas fa-bars navButtonStyle" onClick={() => {props.onToggleMenu(props.mainMenuShowing)}}></i>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mainMenuShowing: state.mainMenuShowing,
  }
};

NavBar.propTypes = {
  mainMenuShowing: PropTypes.bool,
  onToggleMenu: PropTypes.func,
};

export default connect(mapStateToProps)(NavBar);

// <div className='navBarBackground'></div>
