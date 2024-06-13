// store.js

import { createStore } from 'redux';

// Initial state
const initialState = {
  name: '',       // Example: empty string
  email: '',      // Example: empty string
  message: '',    // Example: empty string
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CONTACT_FORM':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'RESET_CONTACT_FORM':
      return initialState;
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
