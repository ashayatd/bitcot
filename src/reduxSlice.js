import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    saveData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { saveData } = loginSlice.actions;

export default loginSlice.reducer;
