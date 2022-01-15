import { configureStore } from "@reduxjs/toolkit";

import userAuthSlice from "./userAuth-slice";

const store = configureStore({
  reducer: { auth: userAuthSlice.reducer },
});

export default store;
