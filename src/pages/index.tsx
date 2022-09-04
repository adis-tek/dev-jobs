import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

import { useGetJobsQuery } from "../services/JOBS";

interface Job {
  id: number;
  title: string;
  company_name: string;
  description: string;
  candidate_required_location: string;
  job_type: string;
  url: string;
  publication_date: string;
}

const Home: NextPage = () => {
  const { data } = useGetJobsQuery();

  console.log(data?.jobs[0]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Jobs App</title>
        <meta name="description" content="Find developers jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Testing.</h1>
        {/* {<h1>{JSON.stringify(data?.jobs[0])}</h1>} */}
        {data?.jobs.map((job: Job) => (
          <div key={job.id}>
            <h2>{job.title}</h2>
            <p>
              {parse(
                DOMPurify.sanitize(job.description, {
                  USE_PROFILES: { html: true },
                })
              )}
            </p>
            <p>{job.url}</p>
            <p>{job.job_type}</p>
            <p>{job.candidate_required_location}</p>
            <p>{job.publication_date}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
