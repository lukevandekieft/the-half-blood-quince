import * as types from './../constants/ActionTypes';
/* eslint-disable */
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui';
import constants from './../constants';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const userData = firebase.database().ref('users/Luke');
const currentRecipe = firebase.database().ref('users/Luke/currentRecipeId');
const recipeList = firebase.database().ref('users/Luke/recipes');
const initialLoad = firebase.database().ref('users/Luke/loadedInitialState');
const auth = firebase.auth();

//FB 2
export function newUserLogin() {
  return function (dispatch) {
    auth.signInWithPopup(googleAuthProvider).then(result => {
      // const token = result.credential.accessToken;
      const user = result.user;
      dispatch(userLogin(result.user));
    })
  }
}

export const userLogin = (user) => {
return ({
  type: types.USER_LOGIN,
  user
});
}

export function newUserLogout() {
  return function (dispatch) {
    auth.signOut().then(result => {
      dispatch(userLogout());
    });
  }
}

export const userLogout = (user = null) => ({
  type: types.USER_LOGOUT,
  user: null,
})

//FIREBASE LOGIN
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

//CHANGING CURRENT RECIPE
export const selectRecipe = (selectedRecipeId) => ({
  type: types.SELECT_RECIPE,
  selectedRecipeId: selectedRecipeId
});

export function changeCurrentRecipe (_recipeId, user) {
  console.log(user);
  return () => firebase.database().ref(`users/${user.uid}`).update({
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

//REMOVE RECIPE
export function removeRecipe (recipeId) {
  return () => recipeList.child(recipeId).remove();
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

//CHANGE ROUTE
export const changeRoute = (newRoute) => ({
  type: types.CHANGE_ROUTE,
  newRoute: newRoute
})

//CHANGE POPUP STATUS
export const changePopupStatus = (newStatus) => ({
  type: types.CHANGE_POPUP_STATUS,
  newStatus: newStatus
})

//ADDING RECIPE
export const addRecipe = (newRecipeObject) => ({
  type: types.ADD_RECIPE,
  newRecipeObject: newRecipeObject
});

//SEARCH RECIPES
export const updateSearchValue = (searchValue) => ({
  type: types.SEARCH,
  searchTerm: searchValue
});
