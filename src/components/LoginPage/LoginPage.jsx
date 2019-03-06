import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUserLogin, newUserLogin2 } from './../../actions';

import Loader from '../Widgets/Loader/Loader';

class Login extends React.Component{
  render() {

    const handleLogin = (provider) => {
      this.props.dispatch(newUserLogin(provider));
    };

    const handleLogin2 = (provider) => {
      this.props.dispatch(newUserLogin2(provider));
    };

    return (
      <div>
        <div className='headerSection'></div>
        <p>Please Log In</p>
        <button className='loginLogout' onClick={() =>{handleLogin('google')}}>Login with Google</button>
        <button className='loginLogout' onClick={() =>{handleLogin2('facebook')}}>Login with Facebook</button>
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
