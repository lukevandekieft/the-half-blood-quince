import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeRoute, newEmailUser, newUserLogin } from './../../actions';
import { Redirect } from 'react-router';

import Loader from '../Widgets/Loader/Loader';

class Login extends React.Component{

  _email = null;
  _password = null;

  render() {
    const { dispatch, isRouting } = this.props;

    //Submit new user info
    const submitNewUserForm = (event) => {
      event.preventDefault();
      const newUserInfo = {
        email: this._email.value,
        password: this._password.value,
      }
      alert(newUserInfo);
      dispatch(newEmailUser(newUserInfo));
      dispatch(changeRoute(true));
    }

    if (isRouting === true) {
      return <Redirect to='/' />
    }

    //Login various providers
    const handleLogin = (provider) => {
      this.props.dispatch(newUserLogin(provider));
    };

    return (
      <div>
        <div className='headerSection'></div>
        <p>Please Log In</p>
        <button className='loginLogout' onClick={() =>{handleLogin('google')}}>Login with Google</button>
        <button className='loginLogout' onClick={() =>{handleLogin('facebook')}}>Login with Facebook</button>

        <form className='formLayout' onSubmit={submitNewUserForm.bind(this)}>
          <div className='formInputLayout'>
            <label>Email</label>
            <input
              type="text"
              id='email'
              ref={(input) => {this._email = input;}}
            ></input>
          </div>
          <div className='formInputLayout'>
            <label>Password</label>
            <input
              type="text"
              id='password'
              ref={(input) => {this._password = input;}}
            ></input>
          </div>
          <div className='centerMe'>
            <button type="submit" className='navButtonStyle button-green'>Create Account</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
  };
};

Login.propTypes = {
}

export default connect(mapStateToProps)(Login);
