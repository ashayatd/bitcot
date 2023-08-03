import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer'; // Could represent both signup and auth data

const store = configureStore({
  reducer: {
    user: userReducer, // Reducer to manage user data (including email and password)
  },
});

export default store;
