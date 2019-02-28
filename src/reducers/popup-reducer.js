import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.showPopup, action) => {
  switch (action.type) {
    case types.CHANGE_POPUP_STATUS:
      return action.newStatus;
    default:
      return state;
  }
};
