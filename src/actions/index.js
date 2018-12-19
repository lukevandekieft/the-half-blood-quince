import * as types from './../constants/ActionTypes';
import firebase from 'firebase';
import constants from './../constants';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);
const userData = firebase.database().ref('users/Luke');

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
    userData.on('child_changed', data => {
      dispatch(selectRecipe(data.val()))
    });
  };
}


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
