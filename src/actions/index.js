import * as types from './../constants/ActionTypes';
/* eslint-disable */
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui';
import constants from './../constants';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

//FIREBASE LOGIN
export function newUserLogin() {
  console.log('Login');
  return function (dispatch) {
    auth.signInWithRedirect(googleAuthProvider).then(result => {
      dispatch(userLogin(result.user));
      dispatch(watchRecipes(result.user));
      dispatch(watchUserData(result.user));
      dispatch(watchUserLoad());
    })
  }
}

export function checkLoginStatus() {
  return function (dispatch) {
    auth.getRedirectResult().then(result => {
      console.log(result);
      if (result.user) {
        dispatch(userLogin(result.user));
        dispatch(watchRecipes(result.user));
        dispatch(watchUserData(result.user));
      }
      dispatch(watchUserLoad());
    }).catch(e => { });
    // auth.onAuthStateChanged(function(user) {
    //   if (user) {
    //     dispatch(userLogin(user));
    //     dispatch(watchRecipes(user));
    //     dispatch(watchUserData(user));
    //   }
    //   dispatch(watchUserLoad());
    // });
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
  return () => firebase.database().ref(`users/${user.uid}`).update({
    currentRecipeId: _recipeId
  });
};

export function watchUserData(user) {
  return function(dispatch) {
    firebase.database().ref(`users/${user.uid}/currentRecipeId`).on('value', data => {
      dispatch(selectRecipe(data.val()));
    });
  };
}

//UPDATE RECIPE LIST
export const updateRecipeList = (recipeList) => ({
  type: types.UPDATE_RECIPE_LIST,
  recipeList: recipeList
})

export function watchRecipes(user) {
  return function(dispatch) {
    firebase.database().ref(`users/${user.uid}/recipes`).on('value', data => {
      dispatch(updateRecipeList(data.val()));
    });
  };
}

export function submitRecipe (recipeList, user) {
  return () => firebase.database().ref(`users/${user.uid}`).update({
    recipes: recipeList
  });
};

//REMOVE RECIPE
export function removeRecipe (recipeId, user) {
  return () => firebase.database().ref(`users/${user.uid}/recipes`).child(recipeId).remove();
};

//LOAD STATE
export const loadState = (stateLoaded) => ({
  type: types.LOAD_STATE,
  stateLoaded: stateLoaded
})

export function watchUserLoad() {
  return function(dispatch) {
    console.log('checking login?');
    firebase.database().ref(`users/loadedInitialState`).on('value', data => {
      dispatch(loadState(data.val()));
    });
  };
}

//TOGGLE MAIN MENU
export const toggleMainMenu = (currentMenuState) => ({
  type: types.TOGGLE_MAIN_MENU,
  currentMenuState: currentMenuState
})

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
