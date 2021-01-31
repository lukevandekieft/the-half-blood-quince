import constants from './../constants';
const { types, initialState } = constants;

export default (state = initialState.filterList, action) => {
  switch (action.type) {
  case types.FILTER_LIST:
    return action.filterList;
  default:
    return state;
  }
};
