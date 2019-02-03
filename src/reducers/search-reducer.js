import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users[initialState.currentUser].searchValue, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
