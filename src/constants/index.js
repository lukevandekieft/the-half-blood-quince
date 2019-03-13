import * as types from './ActionTypes';
import { initialState } from './initialState';
import firebaseConfig from './firebaseConfig';
import edamamConfig from './edamamConfig';

export default {
  edamamConfig: edamamConfig,
  firebaseConfig: firebaseConfig,
  initialState: initialState,
  types: types
};
