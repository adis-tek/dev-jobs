import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi: any = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://remotive.com/api/",
  }),
  endpoints: (builder) => ({
    // Get all jobs
    getJobs: builder.query<any, void>({
      query: () => "remote-jobs?limit=120",
    }),
    // Get jobs by search query
    getJobsBySearch: builder.query<any, any>({
      query: (searchQuery) => `remote-jobs?search=${searchQuery}&limit=120`,
    }),
  }),
});

export const { useGetJobsQuery, useGetJobsBySearchQuery } = jobsApi;
