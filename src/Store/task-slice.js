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
  },
});

export const databaseActions = databaseSlice.actions;
export default databaseSlice;
