import constants from './../constants';
import * as types from './../constants/ActionTypes';

export const selectRecipe = (selectedRecipeId) => ({
  type: types.SELECT_RECIPE,
  selectedRecipeId
});


// export function addRecipe (_name, _url, _image_link, _directions, _directions_notes, _ingredients, _ingredients_notes) {
//   return () => recipes.push({
//     name: _name,
//     url: _url,
//     image_link: _image_link,
//     directions: _directions,
//     directions_notes: _directions_notes,
//     ingredients: _ingredients,
//     ingredients_notes: _ingredients_notes
//   });
// };


// const recipes = firebase.database().ref('users/Luke/recipes');

// import firebase from 'firebase';
//
// const { firebaseConfig } = constants;
//
// firebase.initializeApp(firebaseConfig);
