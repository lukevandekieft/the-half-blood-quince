import { combineReducers } from 'redux';
import recipeReducer from './recipe-reducer';
import currentRecipeReducer from './current-recipe-reducer';
import initialStateReducer from './initial-state-reducer';
import isRoutingReducer from './is-routing-reducer';
import popupReducer from './popup-reducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  currentRecipeId: currentRecipeReducer,
  loadedInitialState: initialStateReducer,
  isRouting: isRoutingReducer,
  showPopup: popupReducer
});

export default rootReducer;
