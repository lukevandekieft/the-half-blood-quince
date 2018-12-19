import * as types from './../constants/ActionTypes';

export const selectRecipe = (selectedRecipeId) => ({
  type: types.SELECT_RECIPE,
  selectedRecipeId: selectedRecipeId
});


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


// const recipes = firebase.database().ref('users/Luke/recipes');

// import firebase from 'firebase';
//
// const { firebaseConfig } = constants;
//
// firebase.initializeApp(firebaseConfig);
