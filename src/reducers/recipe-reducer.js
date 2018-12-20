import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users[initialState.currentUser].recipes, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
