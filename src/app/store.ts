import { configureStore } from "@reduxjs/toolkit";

import { jobsApi } from "../services/JOBS";

const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
