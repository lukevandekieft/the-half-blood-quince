
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
    user,
    component: Component,
    ...otherProps
}) => (
        <Route exact {...otherProps} render={(props) => {
            if (user.uid && user.uid !=='initialLoadUser') {
                return (
                    <div>
                        <Component {...props} />
                    </div>
                );
            } else {
                return (
                    <Redirect to='/login' />
                );
            }
        }} />
    );

const mapStateToProps = (state) => ({
    user: state.user
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
