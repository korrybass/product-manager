import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import {saveItems, getItems} from './localStorageUtils/index.js';

const persistedState = getItems();
const store = createStore(reducers, {products: persistedState}, applyMiddleware(thunk, reduxPromise))

store.subscribe(() => { saveItems({ products: store.getState().products }) });

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
