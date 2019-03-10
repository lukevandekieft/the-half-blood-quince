import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.isRouting, action) => {
  switch (action.type) {
  case types.CHANGE_ROUTE:
    return action.newRoute;
  default:
    return state;
  }
};
