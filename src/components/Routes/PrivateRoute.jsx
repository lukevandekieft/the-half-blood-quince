
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../Widgets/Loader/Loader';

const PrivateRoute = ({
  component: Component,
  loadedInitialState,
  user,
  ...otherProps
}) => (
  <Route exact {...otherProps} render={(props) => {
    if (loadedInitialState) {
      if (user.uid && user.uid !=='initialLoadUser') {
        return (
          <Component {...props} />
        );
      } else {
        return (
          <Redirect to='/login' />
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
  loadedInitialState: state.loadedInitialState,
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
