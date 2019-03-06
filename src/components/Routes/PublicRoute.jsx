import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../Widgets/Loader/Loader';

const PublicRoute = ({
  component: Component,
  loadedInitialState,
  user,
  ...otherProps
}) => (
  <Route exact {...otherProps} render={(props) => {
    if (loadedInitialState) {
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
    } else {
      return (
        <Loader />
      )
    }
  }} />
);

const mapStateToProps = (state) => ({
    user: state.user,
    loadedInitialState: state.loadedInitialState,
});

export default withRouter(connect(mapStateToProps)(PublicRoute));
