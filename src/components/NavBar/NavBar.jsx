import React from 'react';
import Logo from './Logo.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newUserLogin, newUserLogout } from '../../actions';

class NavBar extends React.Component{

  render() {
    const handleNewLogin = (event) => {
      event.preventDefault();
      this.props.dispatch(newUserLogin());
    };

    const handleLogout = (event) => {
      event.preventDefault();
      this.props.dispatch(newUserLogout());
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
            { !this.props.user && (
            <button className='loginLogout' onClick={handleNewLogin}>Login</button>)
            || this.props.user && (
            <button className='loginLogout' onClick={handleLogout}>Logout</button>
            )}
          </div>
        </div>
        <div className='navBarBackground'></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(NavBar);
