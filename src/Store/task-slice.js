import { createSlice } from "@reduxjs/toolkit";

const databaseSlice = createSlice({
  name: "database",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTaskInRedux(state, action) {
      state.tasks = action.payload.tasks;
    },
    deleteDataLogout(state) {
      state.tasks = [];
    },
  },
});

export const databaseActions = databaseSlice.actions;
export default databaseSlice;
