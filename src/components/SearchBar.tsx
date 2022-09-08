import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { searchJobs, fullTime } from "../features/searchAndFilter";

const SearchBar: NextPage = () => {
  // const { searchJobs, fullTime } = useSelector(
  //   (state: any) => state.searchAndFilter
  // );
  const [search, setSearch] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [fullTimeOnly, setFullTimeOnly] = useState<boolean>(false);

  const dispatch = useDispatch();

  const formatSearchValue = (value: string) => {
    return value.replace(/\s/g, "%20");
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const combinedSearch = formatSearchValue((search + " " + location).trim());
    //Then dispatch the combinedSearch to the store
    dispatch(searchJobs(combinedSearch));
    dispatch(fullTime(fullTimeOnly));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Filter by title, companies, expertise..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="checkbox"
          checked={fullTimeOnly}
          onChange={(e) => setFullTimeOnly(e.target.checked)}
        />

        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
