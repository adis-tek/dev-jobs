import { configureStore } from "@reduxjs/toolkit";

import { jobsApi } from "../services/JOBS";
import { searchJobsAndFilter } from "../features/searchAndFilter";

const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    currentSearchJobsAndFilter: searchJobsAndFilter.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
