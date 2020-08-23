import * as types from './../constants/ActionTypes';
/* eslint-disable */
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui';
import constants from './../constants';
import { v4 } from 'uuid';
const { firebaseConfig, edamamConfig } = constants;

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const auth = firebase.auth();

//FIREBASE LOGIN
export function newUserLogin(authProvider) {
  return function (dispatch) {
    let authFunction;
    if (authProvider === 'google') {
      authFunction = auth.signInWithRedirect(googleAuthProvider);
    } else if (authProvider === 'facebook') {
      authFunction = auth.signInWithRedirect(facebookAuthProvider);
    } else if (authProvider === 'twitter') {
      authFunction = auth.signInWithRedirect(twitterAuthProvider);
    } else if (typeof authProvider === 'object') {
      authFunction = auth.signInWithEmailAndPassword(authProvider.email, authProvider.password);
    }
    authFunction.then(result => {
      if(result.user) {
        dispatch(userLogin(result.user));
        dispatch(watchRecipes(result.user));
        dispatch(watchApiSearch(result.user));
      } else {
        dispatch(userLogin(result));
        dispatch(watchRecipes(result));
        dispatch(watchApiSearch(result));
      }
      dispatch(watchUserLoad());
    }).catch(
      function(error) {
        dispatch(userLoginError(error));
      }
    );
  }
}

//CREATE NEW EMAIL USER
export function newEmailUser(newUser) {
  return function (dispatch) {
    auth.createUserWithEmailAndPassword(newUser.email, newUser.password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });
  }
}

//CHECK AUTH STATUS ON PAGE REFRESH OR REDIRECT
export function checkLoginStatus() {
  return function (dispatch) {
    auth.getRedirectResult().then(result => {
      if (result.user) {
        dispatch(userLogin(result.user));
        dispatch(watchRecipes(result.user));
        dispatch(watchApiSearch(result.user));
        dispatch(watchUserLoad());
      } else {
        auth.onAuthStateChanged(function(user) {
          if (user) {
            dispatch(userLogin(user));
            dispatch(watchRecipes(user));
            dispatch(watchApiSearch(user));
          }
          dispatch(watchUserLoad());
        });
      }
    }).catch(e => { });
  }
}

export const userLogin = (user) => {
  return ({
    type: types.USER_LOGIN,
    user
  });
}

export const userLoginError = (error) => {
  return ({
    type: types.USER_LOGIN_ERROR,
    error
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
    firebase.database().ref(`users/loadedInitialState`).on('value', data => {
      dispatch(loadState(true));
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


//SEARCH API RECIPES
export function fetchApiSearchList(userInput, user) {
  return function (dispatch) {
    dispatch(searchApiRecipes());
    return fetch('https://api.edamam.com/search?q=' + userInput + edamamConfig).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      let newRecipes = {};
      if (json.hits) {
        Object.keys(json.hits).map(recipeId => {
          const uniqueRecipeId = v4();
          let dish = json.hits[recipeId];
          let recipeObject = {
            name: dish.recipe.label,
            imageLink: dish.recipe.image,
            ingredients: dish.recipe.ingredientLines,
            url: dish.recipe.url,
            key: uniqueRecipeId
          };
          newRecipes[uniqueRecipeId] = recipeObject;
        });
      }
      dispatch(submitApiSearch(newRecipes, userInput, user));
    });
  };
}

export function watchApiSearch(user) {
  return function(dispatch) {
    firebase.database().ref(`users/${user.uid}/lastRecipeSearch`).on('value', data => {
      let newSearchList = null;
      if (data.val()) {
        if (data.val().searchList) {
          newSearchList = data.val().searchList;
        }
      };
      let newSearchTerm = null;
      if (data.val()) {
        if (data.val().searchTerm) {
          newSearchTerm = data.val().searchTerm;
        }
      };
      dispatch(receiveApiRecipes(newSearchList, newSearchTerm));
    });
  };
}

export function submitApiSearch (recipeList, searchTerm, user) {
  return () => firebase.database().ref(`users/${user.uid}`).update({
    lastRecipeSearch: {
      searchList: recipeList,
      searchTerm: searchTerm,
    }
  });
};

export const searchApiRecipes = () => ({
  type: types.SEARCH_API_RECIPES,
})

export const receiveApiRecipes = (searchList, searchTerm) => ({
    type: types.RECEIVE_API_RECIPES,
    searchList: searchList,
    searchTerm: searchTerm,
  });
