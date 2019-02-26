import * as types from './../constants/ActionTypes';
import firebase from 'firebase';
import constants from './../constants';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const userData = firebase.database().ref('users/Luke');
const currentRecipe = firebase.database().ref('users/Luke/currentRecipeId');
const recipeList = firebase.database().ref('users/Luke/recipes');
const initialLoad = firebase.database().ref('users/Luke/loadedInitialState');

firebase.auth().signInWithPopup(googleAuthProvider).then(result => {
    // Google Access Token.
    const token = result.credential.accessToken;
    console.log(token);
    // user info.
    const user = result.user;
    console.log(user);
    // ...
}).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    // Firebase Auth Credential type
    const credential = error.credential;
    // ...
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        const uid = user.uid;
        const name = user.displayName;
        const email = user.email;
        // ...
    } else {
        // no user...
    }
});

firebase.auth().signOut().then(result => {
    // successful...
}).catch(error => {
    // ...
});

//FIREBASE LOGIN
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const firebaseLogin = () => {
    return () => {
       return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const firebaseLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};

//CHANGING CURRENT RECIPE
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
