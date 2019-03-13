import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import Loader from '../Widgets/Loader/Loader';

const PrivateRoute = ({
  component: Component,
  loadedInitialState,
  user,
  ...otherProps
}) => (
  //If user exists load page, otherwise redirect to LoginPage
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
      );
    }
  }} />
);

const mapStateToProps = (state) => ({
  loadedInitialState: state.loadedInitialState,
  user: state.user,
});

PrivateRoute.propTypes = {
  component: PropTypes.func,
  loadedInitialState: PropTypes.bool,
  user: PropTypes.object,
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));
