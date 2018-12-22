import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users[initialState.currentUser].loadedInitialState, action) => {
  switch (action.type) {
    case types.LOAD_STATE:
      return action.stateLoaded;
    default:
      return state;
  }
};
