import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import currentRecipeReducer from './current-recipe-reducer';
import initialStateReducer from './initial-state-reducer';
import isRoutingReducer from './is-routing-reducer';
import popupReducer from './popup-reducer';
import recipeReducer from './recipe-reducer';
import searchReducer from './search-reducer';

const rootReducer = combineReducers({
  user: authReducer,
  currentRecipeId: currentRecipeReducer,
  isRouting: isRoutingReducer,
  loadedInitialState: initialStateReducer,
  recipes: recipeReducer,
  searchValue: searchReducer,
  showPopup: popupReducer
});

export default rootReducer;
