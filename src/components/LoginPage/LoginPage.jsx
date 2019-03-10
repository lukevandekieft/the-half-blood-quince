import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeRoute, newEmailUser, newUserLogin } from './../../actions';
import { Redirect } from 'react-router';
import facebook from'../../assets/images/facebook.svg';
import google from'../../assets/images/google.svg';

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
      <div className='contentContainer login'>
        <div className='loginBackground'></div>
        <div className='loginPage'>
          <div className='navBarMargin'></div>
          <div className='loginBox'>
            <h2>Whoops - This Page is Half-baked!</h2>
            <p>Thankfully the rest of the site is up and running. Click below to view a test account with dummy data!</p>
            <button className='loginButton google' onClick={() =>{handleLogin({email: 'ramb222@yahoo.com', password: 'testpassword'})}}>View Demo</button>
            <button className='loginButton google' onClick={() =>{handleLogin('google')}}><img className='logo' src={google}/>Log in in with Google</button>
            <button className='loginButton facebook' onClick={() =>{handleLogin('facebook')}}><img className='logo' src={facebook}/>Log in with Facebook</button>
            <form onSubmit={submitEmailLogin.bind(this)}>
              <div className='inputBox'>
              <i class="fas fa-user"></i>
                <input
                  type='email'
                  id='email'
                  placeholder='Email'
                  ref={(input) => {this._loginEmail = input;}}
                ></input>
              </div>
              <div className='inputBox'>
                <i class="fas fa-lock"></i>
                <input
                  type='password'
                  id='password'
                  placeholder='password'
                  ref={(input) => {this._loginPassword = input;}}
                ></input>
              </div>
              <div className='centerMe'>
                <button type="submit" className='navButtonStyle button-green'>Login</button>
              </div>
            </form>
          </div>

        </div>
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

// <form className='formLayout' onSubmit={submitNewUserForm.bind(this)}>
//   <div className='formInputLayout'>
//     <label>Email</label>
//     <input
//       type="text"
//       id='email'
//       ref={(input) => {this._newEmail = input;}}
//     ></input>
//   </div>
//   <div className='formInputLayout'>
//     <label>Password</label>
//     <input
//       type="text"
//       id='password'
//       ref={(input) => {this._newPassword = input;}}
//     ></input>
//   </div>
//   <div className='centerMe'>
//     <button type="submit" className='navButtonStyle button-green'>Create Account</button>
//   </div>
// </form>
//

// <div class="fb-login-button" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="false"></div>
