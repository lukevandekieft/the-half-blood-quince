import { combineReducers } from 'redux';
import recipeReducer from './recipe-reducer';
import currentRecipeReducer from './current-recipe-reducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  currentRecipeId: currentRecipeReducer
});

export default rootReducer;
