import { createStore } from 'redux';
import * as actions from './../../actions';
import constants from './../../constants';
import authReducer from './../../reducers/auth-reducer';
import currentRecipeReducer from './../../reducers/current-recipe-reducer';
import initialStateReducer from './../../reducers/initial-state-reducer';
import isRoutingReducer from './../../reducers/is-routing-reducer';
import mainMenuReducer from './../../reducers/main-menu-reducer';
import popupReducer from './../../reducers/popup-reducer';
import recipeReducer from './../../reducers/recipe-reducer';
import rootReducer from './../../reducers/';
import searchApiReducer from './../../reducers/search-api-reducer';
import searchReducer from './../../reducers/search-reducer';

describe('Recipe App', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('rootReducer', () => {
    // it('Should accept and return initial state.', () => {
    //   expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    // });

    it('Should contain logic from both reducers.', () => {
      expect(store.getState().currentRecipeId).toEqual(currentRecipeReducer(undefined, { type: null }));
      expect(store.getState().recipes).toEqual(recipeReducer(undefined, { type: null }));
    });
  });

  describe('authReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(authReducer(initialState, { type: null })).toEqual(initialState);
    });
    it('Should remove user data when logout is selected.', () => {
      const logoutUser =
      { uid: null }
      const action = {
        type: types.USER_LOGOUT,
        user: {
          uid: null,
        }
      };
      expect(authReducer(initialState.user, action)).toEqual(logoutUser);
    });
    it('Should change user data when login is selected.', () => {
      const loginUser =
      { uid: 'parakeetz' };
      const action = {
        type: types.USER_LOGIN,
        user: {
          uid: 'parakeetz',
        }
      };
      expect(authReducer(initialState.user, action)).toEqual(loginUser);
    });
  });

  describe('currentRecipeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(currentRecipeReducer(initialState, { type: null })).toEqual(initialState);
    });
    it('Should change current recipe based on selected item.', () => {
      const selectedRecipe = 'mapo_tofu';
      const action = actions.selectRecipe(selectedRecipe);
      const newStateEntry = 'mapo_tofu';
      expect(currentRecipeReducer(initialState.users, action)).toEqual(newStateEntry);
    });
  });

  describe('initialStateReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(initialStateReducer(initialState, { type: null })).toEqual(initialState);
    });
    it('Should change state to true once information is received.', () => {
      const sampleState = {
        loadedInitialState: true
      };
      const action = actions.loadState(sampleState);
      expect(initialStateReducer(initialState.users['Luke'], action)).toEqual(sampleState);
    });
  });

  describe('isRoutingReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(isRoutingReducer(initialState, { type: null })).toEqual(initialState);
    });
    it('Should change state to true when routing.', () => {
      const sampleState = {
        isRouting: true
      };
      const action = actions.changeRoute(sampleState);
      expect(isRoutingReducer(initialState.users, action)).toEqual(sampleState);
    });
  });

  describe('mainMenuReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(mainMenuReducer(initialState, { type: null })).toEqual(initialState);
    });
    it('Should toggle main menu state.', () => {
      const action = actions.toggleMainMenu(false);
      expect(mainMenuReducer(initialState.mainMenuShowing, action)).toEqual(true);
    });
  });

  describe('popupReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(currentRecipeReducer(initialState, { type: null })).toEqual(initialState);
    });
    it('Should toggle popup status on firing.', () => {
      const sampleState = {
        showPopup: true
      };
      const action = actions.changePopupStatus(sampleState);
      expect(popupReducer(initialState.users, action)).toEqual(sampleState);
    });
  });

  describe('recipeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(recipeReducer(initialState, { type: null })).toEqual(initialState);
    });
    it('Should update recipe list when change is recieved.', () => {
      const newRecipeList =
          {
            split_pea_soup : {
              name : 'Split Pea Soup',
              imageLink : 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps22295_HWS1227354D43B.jpg',
              url : 'https://www.tasteofhome.com/recipes/vegetarian-split-pea-soup/',
              ingredients : [
                '2 green onions, sliced'
              ],
              ingredientsNotes : [
                'add a little bit of liquid smoke before blending, add bacon bits at the end'
              ],
              directions : [
                'In a large saucepan, combine the first nine ingredients; bring to a boil. Reduce heat; cover and simmer for 1 hour or until peas are tender, stirring occasionally.'
              ],
              directionsNotes : [
                'add a little bit of liquid smoke before blending, add bacon bits at the end'
              ]
            }
          };
      const action = actions.updateRecipeList(newRecipeList);
      expect(recipeReducer(initialState.users['initialLoadUser'].recipes, action)).toEqual(newRecipeList);
    });
  });

  describe('searchApiReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(searchApiReducer(initialState, { type: null })).toEqual(initialState);
    });
    it('Should change isFetching to true when search is made.', () => {
      const sampleState = {
        isFetching: true,
        searchList: null,
      };
      const action = actions.searchApiRecipes();
      expect(searchApiReducer(initialState.users['initialLoadUser'].lastRecipeSearch, action)).toEqual(sampleState);
    });
    it('Should return search results and reset isFetching to false.', () => {
      const sampleState = {
        isFetching: false,
        searchList: [
          'pizza': {
            name: 'pizza',
            image: 'url.funzies',
            ingredients: 'Boil em mash em stick em in a stew',
            url: 'url funzies 2.0',
            key: 'ID number'
          }],
      };
      const action = actions.receiveApiRecipes(sampleState.searchList);
      expect(searchApiReducer(initialState.users['initialLoadUser'].lastRecipeSearch, action)).toEqual(sampleState);
    });
  });

  describe('searchReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(searchReducer(initialState, { type: null })).toEqual(initialState);
    });
    it('Should change search value depending on user input', () => {
      const sampleState = {
        searchValue: 'peanuts'
      };
      const action = actions.updateSearchValue(sampleState);
      expect(searchReducer(initialState.users, action)).toEqual(sampleState);
    });
  });

});
