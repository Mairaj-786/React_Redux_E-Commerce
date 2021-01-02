import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
import ProductReducer from './Reducers/ProductReducer';
import CartReducers from './Reducers/CartReducers'
const root = combineReducers({
    ProductReducer,
    CartReducers
});

const store = createStore(root, devToolsEnhancer());

export default store;

