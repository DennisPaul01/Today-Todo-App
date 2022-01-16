import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    statusLogin: null,
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isLoggedIn", action.payload.isLoggedIn);
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.statusLogin = action.payload.statusLogin;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const authActions = userAuthSlice.actions;
export default userAuthSlice;
