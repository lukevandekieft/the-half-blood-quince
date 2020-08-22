import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.user, action) => {
  switch (action.type) {
  case types.USER_LOGIN:
    return Object.assign({}, action.user);
  case types.USER_LOGIN_ERROR:
    console.log(action)
    return action.error;
  case types.USER_LOGOUT:
    return {
      uid: null,
    };
  default:
    return state;
  }
};
