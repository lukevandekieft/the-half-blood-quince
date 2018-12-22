import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users[initialState.currentUser].recipes, action) => {
  switch (action.type) {
    case types.UPDATE_RECIPE_LIST:
      return action.recipeList;
    case types.ADD_RECIPE:
      return state;
    default:
      return state;
  }
};
