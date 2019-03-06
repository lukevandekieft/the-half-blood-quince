import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUserLogin } from './../../actions';

import Loader from '../Widgets/Loader/Loader';

class Login extends React.Component{
  render() {

    const handleGoogleLogin = () => {
      this.props.dispatch(newUserLogin());
    };

    return (
      <div>
        <div className='headerSection'></div>
        <p>Please Log In</p>
        <button className='loginLogout' onClick={handleGoogleLogin}>Login with Google</button>
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
