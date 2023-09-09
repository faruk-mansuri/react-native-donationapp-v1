import { createSlice } from '@reduxjs/toolkit';
import img from '../../assets/profileImg.jpg';

const initialState = {
  isLoggedIn: false,
  profileImg: img,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    logIn: (state, action) => {
      return { ...state, isLoggedIn: true, ...action.payload };
    },
    resetUserToInitialState: () => {
      return initialState;
    },
    updateToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { resetUserToInitialState, logIn, updateToken } =
  userSlice.actions;

export default userSlice.reducer;
