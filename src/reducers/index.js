import { combineReducers } from 'redux';
import recipeReducer from './recipe-reducer';

const rootReducer = combineReducers({
  currentUser: recipeReducer
});

export default rootReducer;
