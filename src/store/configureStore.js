import { configureStore } from '@reduxjs/toolkit';
import signupReducer from '../reducers/signupReducer';
import authReducer from '../reducers/authReducer';

const store = configureStore({
  reducer: {
    signup: signupReducer, 
    auth: authReducer,
  }
});

export default store;
