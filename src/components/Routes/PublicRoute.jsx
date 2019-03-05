import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({
    user,
    component: Component,
    ...otherProps
}) => (
        <Route exact {...otherProps} render={(props) => {
            if (user.uid && user.uid !=='initialLoadUser') {
                return (
                    <Redirect to='/' />
                );
            } else {
                return (
                  <div>
                    <Component {...props} />
                  </div>
                );
            }
        }} />
    );

const mapStateToProps = (state) => ({
    user: state.user
});

export default withRouter(connect(mapStateToProps)(PublicRoute));
