// reducers.js

import { UPDATE_FORM_DATA } from './actions';

// Initial state for the form data
const initialStateMap = {
  state: '',
  city: '',
  address: '',
  postalCode: ''
};

// Reducer function to handle form data updates
const formReducer = (state = initialStateMap, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default formReducer;
