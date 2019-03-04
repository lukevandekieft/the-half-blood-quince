import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.users[initialState.user.uid].currentRecipeId, action) => {
  switch (action.type) {
  case types.SELECT_RECIPE:
    return action.selectedRecipeId;
  default:
    return state;
  }
};
