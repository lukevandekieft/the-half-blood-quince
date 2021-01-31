import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import filterListReducer from './filter-list-reducer';
import initialStateReducer from './initial-state-reducer';
import isRoutingReducer from './is-routing-reducer';
import mainMenuReducer from './main-menu-reducer';
import recipeReducer from './recipe-reducer';
import searchApiReducer from './search-api-reducer';
import searchReducer from './search-reducer';

const rootReducer = combineReducers({
  filterList: filterListReducer,
  isRouting: isRoutingReducer,
  lastRecipeSearch: searchApiReducer,
  loadedInitialState: initialStateReducer,
  mainMenuShowing: mainMenuReducer,
  recipes: recipeReducer,
  searchValue: searchReducer,
  user: authReducer,
});

export default rootReducer;
