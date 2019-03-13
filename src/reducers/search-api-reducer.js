import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users[initialState.user.uid].lastRecipeSearch, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
