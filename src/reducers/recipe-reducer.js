import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.users['Luke'], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
