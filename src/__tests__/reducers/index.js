import constants from "./../../constants";
import recipeReducer from './../../reducers/recipe-reducer';
import currentRecipeReducer from './../../reducers/current-recipe-reducer';
import rootReducer from './../../reducers/';
import { createStore } from 'redux';
import * as actions from './../../actions';

describe('Recipe App', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('recipeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(recipeReducer(initialState.songsById, { type: null })).toEqual(initialState.songsById);
    });
  });

  describe('currentRecipeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(currentRecipeReducer(initialState, { type: null })).toEqual(initialState);
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should contain logic from both reducers.', () => {
      expect(store.getState().currentRecipeId).toEqual(currentRecipeReducer(undefined, { type: null }));
      expect(store.getState().recipes).toEqual(recipeReducer(undefined, { type: null }));
    });
  });

});
