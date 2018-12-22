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
      expect(recipeReducer(initialState, { type: null })).toEqual(initialState);
    });
    it('Should update recipe list when change is recieved.', () => {
      const newRecipeList =
          {
            split_pea_soup : {
              name : "Split Pea Soup",
              imageLink : "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps22295_HWS1227354D43B.jpg",
              url : "https://www.tasteofhome.com/recipes/vegetarian-split-pea-soup/",
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
      const newStateEntry = {
        currentUser : 'Luke',
        users : {
          Luke : {
            currentRecipeId : null,
            recipes : newRecipeList
          }
        }
      };
      expect(recipeReducer(initialState.users['Luke'].recipes, action)).toEqual(newStateEntry);
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
      expect(currentRecipeReducer(initialState.users['Luke'], action)).toEqual(newStateEntry);
    });
  });

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState.users['Luke']);
    });

    it('Should contain logic from both reducers.', () => {
      expect(store.getState().currentRecipeId).toEqual(currentRecipeReducer(undefined, { type: null }));
      expect(store.getState().recipes).toEqual(recipeReducer(undefined, { type: null }));
    });
  });

});
