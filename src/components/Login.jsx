import React from 'react';
import { connect } from 'react-redux';
import { firebaseLogin } from '../actions';

const Login = ({ login }) => (
    <div className='container'>
        <button onClick={login}>Login with Google Account</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(firebaseLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);
