import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users[initialState.user].searchValue, action) => {
  switch (action.type) {
    case types.SEARCH:
      return action.searchTerm;
    default:
      return state;
  }
};
