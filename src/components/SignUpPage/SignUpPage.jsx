import React from 'react';
import { connect } from 'react-redux';
import { newEmailUser, newUserLogin } from './../../actions';
import facebook from'../../assets/images/facebook.svg';
import google from'../../assets/images/google.svg';

class SignUpPage extends React.Component{

  _newEmail = null;
  _newPassword = null;

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

    //Submit new user info
    const submitNewUserForm = (event) => {
      event.preventDefault();
      const newUserInfo = {
        email: this._newEmail.value,
        password: this._newPassword.value,
      }
      this.props.dispatch(newEmailUser(newUserInfo));
    }

    return (
      <div className='contentContainer login'>
        <div className='loginBackground'></div>
        <div className='loginPage'>
          <div className='navBarMargin'></div>
          <div className='loginBox'>
            <div className= 'loginSection'>
              <h2>Welcome to Half-Blood Quince!</h2>
              <p>Feel free to look around on our demo account below:</p>
              <button className='loginButton demo' onClick={() =>{handleLogin({email: 'ramb222@yahoo.com', password: 'testpassword'})}}>View Demo</button>
            </div>

            <div className='loginSection'>
            <h3>Sign in Below</h3>
            <button className='loginButton google' onClick={() =>{handleLogin('google')}}><img className='logo' src={google} alt='Google Logo'/>Log in with Google</button>
            <button className='loginButton facebook' onClick={() =>{handleLogin('facebook')}}><img className='logo' src={facebook} alt='Facebook Logo'/>Log in with Facebook</button>
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

export default connect(mapStateToProps)(SignUpPage);

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
