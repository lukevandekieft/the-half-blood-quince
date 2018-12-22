import * as types from './../constants/ActionTypes';
import firebase from 'firebase';
import constants from './../constants';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);
const userData = firebase.database().ref('users/Luke');
const currentRecipe = firebase.database().ref('users/Luke/currentRecipeId');
const recipeList = firebase.database().ref('users/Luke/recipes');
const initialLoad = firebase.database().ref('users/Luke/loadedInitialState');

//CHANGING CURRENT USER
export const selectRecipe = (selectedRecipeId) => ({
  type: types.SELECT_RECIPE,
  selectedRecipeId: selectedRecipeId
});

export function changeCurrentRecipe (_recipeId) {
  return () => userData.update({
    currentRecipeId: _recipeId
  });
};

export function watchUserData() {
  return function(dispatch) {
    currentRecipe.on('value', data => {
      dispatch(selectRecipe(data.val()));
    });
  };
}

//UPDATE RECIPE LIST
export const updateRecipeList = (recipeList) => ({
  type: types.UPDATE_RECIPE_LIST,
  recipeList: recipeList
})

export function watchRecipes() {
  return function(dispatch) {
    recipeList.on('value', data => {
      dispatch(updateRecipeList(data.val()));
    });
  };
}

export function submitRecipe (recipeList) {
  return () => userData.update({
    recipes: recipeList
  });
};

//LOAD STATE
export const loadState = (stateLoaded) => ({
  type: types.LOAD_STATE,
  stateLoaded: stateLoaded
})

export function watchUserLoad() {
  return function(dispatch) {
    initialLoad.on('value', data => {
      dispatch(loadState(data.val()));
    });
  };
}

//ADDING RECIPE
export const addRecipe = (newRecipeObject) => ({
  type: types.ADD_RECIPE,
  newRecipeObject: newRecipeObject
});

//
// export function addRecipe (_name, _url, _imageLink, _directions, _directionsNotes, _ingredients, _ingredientsNotes) {
//   return () => recipes.push({
//     name: _name,
//     url: _url,
//     imageLink: _imageLink,
//     directions: _directions,
//     directionsNotes: _directionsNotes,
//     ingredients: _ingredients,
//     ingredientsNotes: _ingredientsNotes
//   });
// };
