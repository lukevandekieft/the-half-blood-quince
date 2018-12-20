import { combineReducers } from 'redux';
import recipeReducer from './recipe-reducer';
import currentRecipeReducer from './current-recipe-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  currentRecipeId: currentRecipeReducer,
  currentUser: userReducer
});

export default rootReducer;
