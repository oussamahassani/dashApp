// store.js

import { createStore } from 'redux';
import rootReducer from './rootReducer';

// Create the Redux store with the rootReducer
const store = createStore(rootReducer);

export default store;
