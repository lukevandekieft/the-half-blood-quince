import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

let unsubscribe = store.subscribe(() => {
  return;
});

const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

render(App);
