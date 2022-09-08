import { createSlice } from "@reduxjs/toolkit";

export const searchJobsAndFilter = createSlice({
  name: "searchJobsAndFilter",
  initialState: {
    searchQuery: "",
    fullTime: false,
  },
  reducers: {
    searchJobs: (state, action) => {
      state.searchQuery = action.payload;
      console.log(action);
    },
    fullTime: (state, action) => {
      state.fullTime = action.payload;
      console.log(action);
    },
  },
});

export const { searchJobs, fullTime } = searchJobsAndFilter.actions;

export default searchJobsAndFilter.reducer;
