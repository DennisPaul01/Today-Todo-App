import { createSlice } from "@reduxjs/toolkit";

const personalDataSlice = createSlice({
  name: "personalData",
  initialState: {
    userName: null,
  },
  reducers: {
    addNameInRedux(state, action) {
      state.userName = action.payload.userName;
    },
    deletePersonalDataLogout(state) {
      state.userName = null;
    },
  },
});

export const personalDataActions = personalDataSlice.actions;
export default personalDataSlice;
