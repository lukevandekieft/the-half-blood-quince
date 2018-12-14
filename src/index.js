import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';


import App from './components/App.jsx';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

let unsubscribe = store.subscribe(() =>
  console.log(store.getState()),
  console.log(store)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
