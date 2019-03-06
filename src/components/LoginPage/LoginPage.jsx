import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../Widgets/Loader/Loader';

class Login extends React.Component{
  render() {
    return (
      <div>
      <div className='headerSection'>
      </div>
      Please Log In
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
