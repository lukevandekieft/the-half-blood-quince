import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users[initialState.currentUser].showPopup, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
