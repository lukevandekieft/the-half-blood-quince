import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import { HashRouter } from 'react-router-dom';

import App, { history } from './components/App.jsx';
import firebase from 'firebase';
import { login, logout } from './actions';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

let unsubscribe = store.subscribe(() =>
  console.log(store)
);

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  );
};

let isRendered = false;
const renderApp = () => {
    if (!isRendered) {
        ReactDOM.render(render, document.getElementById('root'));
        isRendered = true;
    }
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('login user id: ', user.uid);
        console.log('name: ', user.displayName);
        store.dispatch(login(user.uid));
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/home');
        }
    } else {
        console.log('logout');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

render(App);
