import { configureStore } from "@reduxjs/toolkit";

import userAuthSlice from "./userAuth-slice";
import databaseSlice from "./task-slice";

const store = configureStore({
  reducer: { auth: userAuthSlice.reducer, database: databaseSlice.reducer },
});

export default store;
