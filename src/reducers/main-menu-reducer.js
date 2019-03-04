import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.mainMenuShowing, action) => {
  switch (action.type) {
    case types.TOGGLE_MAIN_MENU:
      return action.newRoute;
    default:
      return state;
  }
};
