import { configureStore } from "@reduxjs/toolkit";

import userAuthSlice from "./userAuth-slice";
import databaseSlice from "./task-slice";
import personalDataSlice from "./personalData-slice";

const store = configureStore({
  reducer: {
    auth: userAuthSlice.reducer,
    database: databaseSlice.reducer,
    personalData: personalDataSlice.reducer,
  },
});

export default store;
