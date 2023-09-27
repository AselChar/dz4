import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import {logger} from 'redux-logger/src'
import { rootReducer } from './redux/reducers/reducer';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware( thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
