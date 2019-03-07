import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeRoute, newEmailUser, newUserLogin } from './../../actions';
import { Redirect } from 'react-router';

import Loader from '../Widgets/Loader/Loader';

class Login extends React.Component{

  _loginEmail = null;
  _loginPassword = null;
  _newEmail = null;
  _newPassword = null;

  render() {
    const { dispatch, isRouting } = this.props;

    //Login OAuth providers
    const handleLogin = (provider) => {
      this.props.dispatch(newUserLogin(provider));
    };

    //Login email
    const submitEmailLogin = (event) => {
      event.preventDefault();
      const newUserInfo = {
        email: this._loginEmail.value,
        password: this._loginPassword.value,
      }
      this.props.dispatch(newUserLogin(newUserInfo));
    };

    //Submit new user info
    const submitNewUserForm = (event) => {
      event.preventDefault();
      const newUserInfo = {
        email: this._newEmail.value,
        password: this._newPassword.value,
      }
      dispatch(newEmailUser(newUserInfo));
      // dispatch(changeRoute(true));
    }

    // if (this.props.isRouting === true) {
    //   return <Redirect to='/' />
    // }

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
              ref={(input) => {this._newEmail = input;}}
            ></input>
          </div>
          <div className='formInputLayout'>
            <label>Password</label>
            <input
              type="text"
              id='password'
              ref={(input) => {this._newPassword = input;}}
            ></input>
          </div>
          <div className='centerMe'>
            <button type="submit" className='navButtonStyle button-green'>Create Account</button>
          </div>
        </form>

        <form className='formLayout' onSubmit={submitEmailLogin.bind(this)}>
          <div className='formInputLayout'>
            <label>Email</label>
            <input
              type="text"
              id='email'
              ref={(input) => {this._loginEmail = input;}}
            ></input>
          </div>
          <div className='formInputLayout'>
            <label>Password</label>
            <input
              type="text"
              id='password'
              ref={(input) => {this._loginPassword = input;}}
            ></input>
          </div>
          <div className='centerMe'>
            <button type="submit" className='navButtonStyle button-green'>Login</button>
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
