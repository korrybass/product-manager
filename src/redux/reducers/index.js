import { combineReducers } from 'redux';
import searchProducts from './products.js';

const rootReducer = combineReducers({
  products: searchProducts
});

export default rootReducer;