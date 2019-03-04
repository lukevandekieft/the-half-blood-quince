import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.user, action) => {
  let user;
  let newLoggedInUserStateSlice;
  switch (action.type) {
    case types.USER_LOGIN:
    console.log(action.user);
      const user =  action.user;
      newLoggedInUserStateSlice = Object.assign({}, action.user);
      return newLoggedInUserStateSlice;
    case types.USER_LOGOUT:
      newLoggedInUserStateSlice = null;
      return newLoggedInUserStateSlice;
    default:
      return state;
  }
}
