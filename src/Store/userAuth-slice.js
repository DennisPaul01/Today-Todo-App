import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    email: null,
    isLoggedIn: false,
    statusLogin: null,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.statusLogin = action.payload.statusLogin;
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.statusLogin = null;
    },
  },
});

export const authActions = userAuthSlice.actions;
export default userAuthSlice;
