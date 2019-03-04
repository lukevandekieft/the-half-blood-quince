import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users[initialState.user.uid].loadedInitialState, action) => {
  switch (action.type) {
    case types.LOAD_STATE:
      return action.stateLoaded;
    default:
      return state;
  }
};
