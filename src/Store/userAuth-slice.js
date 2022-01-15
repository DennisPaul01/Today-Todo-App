import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: "nulltela",
    isLoggedIn: false,
    apiKeyUnsplah: "6WofLvuz48k2pWbeqWTA_6Mvsca8ntVxZ1wo2EKGYwc",
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const authActions = userAuthSlice.actions;
export default userAuthSlice;
