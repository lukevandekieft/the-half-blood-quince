import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...otherProps
}) => (
        <Route {...otherProps} component={(props) => {
            if (isAuthenticated) {
                return (
                    <div>
                        <Component {...props} />
                    </div>
                );
            } else {
                return (
                    <Redirect to='/' />
                );
            }
        }} />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
