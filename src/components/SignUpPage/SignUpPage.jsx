import React from 'react';
import { connect } from 'react-redux';
import { newEmailUser, newUserLogin } from './../../actions';
import { Link } from 'react-router-dom';
import facebook from'../../assets/images/facebook.svg';
import google from'../../assets/images/google.svg';
import twitter from '../../assets/images/twitter.svg';

class SignUpPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      emailError: false,
      passwordMatchError: false,
      passwordValueError: false,
      userNameError: false,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.setState({
      emailError: false,
      passwordMatchError: false,
      passwordValueError: false,
      userNameError: false,
    });
  }

  _newEmail = null;
  _newPassword = null;
  _newUserName = null;
  _verifyPassword = null;

  render() {
    //Login OAuth providers
    const handleLogin = (provider) => {
      this.props.dispatch(newUserLogin(provider));
    };

    //Submit new user info and verify that input values are acceptable
    const submitNewUserForm = (event) => {
      event.preventDefault();
      let isValidUser = true;
      if(this._newUserName.value) {
        this.setState({ userNameError: false });
      } else {
        this.setState({ userNameError: true });
        isValidUser = false;
      }
      if(this._newEmail.value) {
        this.setState({ emailError: false });
      } else {
        this.setState({ emailError: true });
        isValidUser = false;
      }
      if(this._newPassword.value.length > 5) {
        this.setState({ passwordValueError: false });
      } else {
        this.setState({ passwordValueError: true });
        isValidUser = false;
      }
      if(this._newPassword.value === this._verifyPassword.value) {
        this.setState({ passwordMatchError: false });
      } else {
        this.setState({ passwordMatchError: true });
        isValidUser = false;
      }

      if(isValidUser) {
        const newUserInfo = {
          email: this._newEmail.value,
          password: this._newPassword.value,
          userName: this._newUserName.value,
        }
        this.props.dispatch(newEmailUser(newUserInfo));
      }
    }

    return (
      <div className='contentContainer login'>
        <div className='loginBackground'></div>
        <div className='loginPage'>
          <div className='navBarMargin'></div>
          <div className='loginBox'>
            <div className='loginSection'>
            <h2>Create Account Below</h2>
            <button className='loginButton google' onClick={() =>{handleLogin('google')}}><img className='logo' src={google} alt='Google Logo'/>Sign up with Google</button>
            <button className='loginButton facebook' onClick={() =>{handleLogin('facebook')}}><img className='logo' src={facebook} alt='Facebook Logo'/>Sign up with Facebook</button>
            <button className='loginButton twitter' onClick={() =>{handleLogin('twitter')}}><img className='logo' src={twitter} alt='Twitter Logo'/>Sign up with Twitter</button>
            <div className='loginDivider'>
              <hr/><p>OR</p><hr/>
            </div>

            <form onSubmit={submitNewUserForm.bind(this)} className='loginForm'>
              <div className={this.state.userNameError ? 'inputFieldError' : 'inputField'}>
                <i className="fas fa-smile"></i>
                <input
                  type='text'
                  id='name'
                  placeholder='User Name'
                  ref={(input) => {this._newUserName = input;}}
                ></input>
              </div>
              <div className={this.state.emailError ? 'inputFieldError' : 'inputField'}>
                <i className="fas fa-user"></i>
                <input
                  type='email'
                  id='email'
                  placeholder='Email'
                  ref={(input) => {this._newEmail = input;}}
                ></input>
              </div>
              <div className={this.state.passwordValueError ? 'inputFieldError' : 'inputField'}>
                <i className="fas fa-lock"></i>
                <input
                  type='password'
                  id='password'
                  placeholder='Password'
                  ref={(input) => {this._newPassword = input;}}
                ></input>
              </div>
              <div className={this.state.passwordMatchError ? 'inputFieldError' : 'inputField'}>
                <i className="fas fa-lock"></i>
                <input
                  type='password'
                  id='confirmPassword'
                  placeholder='Confirm Password'
                  ref={(input) => {this._verifyPassword = input;}}
                ></input>
              </div>
              <button type="submit" className='loginButton email'>Create Account</button>
            </form>
            <p className='signUpLink'>Already have an account? <Link to='login'>Log in here</Link></p>
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
