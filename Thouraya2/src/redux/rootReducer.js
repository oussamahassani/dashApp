import { combineReducers } from 'redux';
import formReducer from './reducers';

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
  formData: formReducer
});

export default rootReducer;