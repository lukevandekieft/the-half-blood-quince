import React from 'react';
import Logo from './Logo.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newUserLogin, newUserLogout } from '../../actions';

function NavBar(props, {dispatch}){

  function handleNewLogin(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(newUserLogin());
  };

  function handleLogout(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(newUserLogout());
  };

  return (
    <div>
      <div className='navContainer'>
        <div className='pageContentSection navBar'>
          <Link to='/'><Logo /></Link>
          <h1>The Half-Blood Quince</h1>
          <Link to='/home'>
            <h1>Menu</h1>
            <i className="fas fa-bars"></i>
          </Link>
          <button className='loginLogout' onClick={handleNewLogin}>Login</button>
          <button className='loginLogout' onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className='navBarBackground'></div>
    </div>
  );
}

export default connect()(NavBar);
