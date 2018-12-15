import { combineReducers } from 'redux';
import recipeReducer from './recipe-reducer';

const rootReducer = combineReducers({
  user: recipeReducer
});

export default rootReducer;
