import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
    }
};
