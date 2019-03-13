import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users[initialState.user.uid].lastRecipeSearch, action) => {
  switch (action.type) {
    case types.SEARCH_API_RECIPES:
      return Object.assign({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
};
