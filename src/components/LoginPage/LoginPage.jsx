import React from 'react';
import { connect } from 'react-redux';
import { newUserLogin } from './../../actions';
import { Link } from 'react-router-dom';

import facebook from'../../assets/images/facebook.svg';
import google from'../../assets/images/google.svg';
import twitter from'../../assets/images/twitter.svg';

class LoginPage extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  _loginEmail = null;
  _loginPassword = null;

  render() {
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

    return (
      <div className='contentContainer login'>
        <div className='loginBackground'></div>
        <div className='loginPage'>
          <div className='navBarMargin'></div>
          <div className='loginBox'>

            <div className= 'loginSection demo'>
              <h2>Welcome to Half-Blood Quince!</h2>
              <p>Feel free to look around on our demo account below:</p>
              <button className='loginButton demo' onClick={() =>{handleLogin({email: 'ramb222@yahoo.com', password: 'testpassword'})}}>View Demo</button>
            </div>

            <div className='loginSection'>
              <h3>Log in Below</h3>
              <button className='loginButton google' onClick={() =>{handleLogin('google')}}><img className='logo' src={google} alt='Google Logo'/>Log in with Google</button>
              <button className='loginButton facebook' onClick={() =>{handleLogin('facebook')}}><img className='logo' src={facebook} alt='Facebook Logo'/>Log in with Facebook</button>
              <button className='loginButton twitter' onClick={() =>{handleLogin('twitter')}}><img className='logo' src={twitter} alt='Twitter Logo'/>Log in with Twitter</button>
              <div className='loginDivider'>
                <hr/><p>OR</p><hr/>
              </div>
              <form onSubmit={submitEmailLogin.bind(this)} className='loginForm'>
                <div className='inputField'>
                  <i className="fas fa-user"></i>
                  <input
                    type='email'
                    id='email'
                    placeholder='Email'
                    ref={(input) => {this._loginEmail = input;}}
                  ></input>
                </div>
                <div className='inputField'>
                  <i className="fas fa-lock"></i>
                  <input
                    type='password'
                    id='password'
                    placeholder='password'
                    ref={(input) => {this._loginPassword = input;}}
                  ></input>
                </div>
                <button type="submit" className='loginButton email'>Login</button>
              </form>
              <p className='signUpLink'>Don't have an account? <Link to='signup'>Sign up now</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
};

export default connect(mapStateToProps)(LoginPage);
