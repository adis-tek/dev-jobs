import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://remotive.com/api/",
  }),
  endpoints: (builder) => ({
    // Get all jobs
    getJobs: builder.query<any, void>({
      query: () => "remote-jobs",
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;
