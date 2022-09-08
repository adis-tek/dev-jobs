import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

import { useSelector } from "react-redux";
import { useGetJobsBySearchQuery, useGetJobsQuery } from "../services/JOBS";

import SearchBar from "../components/SearchBar";

interface Job {
  id: number;
  title: string;
  company_name: string;
  company_logo: string;
  description: string;
  candidate_required_location: string;
  job_type: string;
  url: string;
  publication_date: string;
}

const Home: NextPage = () => {
  const { searchQuery, fullTime } = useSelector(
    (state: any) => state.currentSearchJobsAndFilter
  );
  const { data, error, isFetching } = useGetJobsQuery();
  const {
    data: searchJobs,
    isLoading,
    error: searchError,
  } = useGetJobsBySearchQuery(searchQuery);
  const [jobsToDisplay, setJobsToDisplay] = useState<number>(12);

  console.log(data?.jobs[0]);

  console.log("search", searchJobs);

  const fullTimeOnlyJobs = data?.jobs.filter((job: Job) => {
    return job.job_type === "full_time";
  });

  // Control the number of jobs on display
  const limitedJobs = data?.jobs.slice(0, jobsToDisplay);

  const limitedFullTimeJobs = fullTimeOnlyJobs?.slice(0, jobsToDisplay);

  console.log(limitedJobs);

  const searchedFullTimeOnlyJobs = searchJobs?.jobs.filter((job: Job) => {
    return job.job_type === "full_time";
  });

  const searchedLimitedJobs = searchJobs?.jobs.slice(0, jobsToDisplay);

  const searchedLimitedFullTimeJobs = searchedFullTimeOnlyJobs?.slice(
    0,
    jobsToDisplay
  );

  const handleJobPagination = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (jobsToDisplay !== 120) {
      setJobsToDisplay(jobsToDisplay + 12);
    }
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong.</div>;
  }

  console.log("Full", fullTime);
  console.log("Search", searchQuery);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Jobs App</title>
        <meta name="description" content="Find developers jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Testing.</h1>
        <SearchBar />
        {JSON.stringify(searchJobs?.jobs?.length)}
        {fullTime}
        {jobsToDisplay < 120 && (
          <button onClick={handleJobPagination}>Click for more.</button>
        )}
      </main>
    </div>
  );
};

export default Home;
