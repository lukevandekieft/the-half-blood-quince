import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users[initialState.user.uid].lastRecipeSearch, action) => {
  switch (action.type) {
    case types.SEARCH_API_RECIPES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_API_RECIPES:
      return Object.assign({}, state, {
        isFetching: false,
        searchList: action.searchList,
        searchTerm: action.searchTerm,
      });
    default:
      return state;
  }
};
