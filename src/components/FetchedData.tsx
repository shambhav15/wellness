import React, { useState, useEffect } from "react";
import SearchBar from "./Serachbar";
import EventList from "./EventList";
import Pagination from "./Pagination";
import { Event } from "@/lib/EventType";

const FetchedData = () => {
  const [data, setData] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats"
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const formatEventDate = (timestamp: number, duration: number): string => {
    const startDate = new Date(timestamp * 1000);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + duration);

    const options: Intl.DateTimeFormatOptions = { month: "long" };
    const month = new Intl.DateTimeFormat("en-US", options).format(startDate);

    return `${month} ${startDate.getDate()}-${endDate.getDate()}, ${startDate.getFullYear()}`;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleDateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDateFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleTagFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTagFilter(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDate =
      dateFilter === "" ||
      (() => {
        const eventYear = new Date(event.date * 1000).getFullYear();
        if (dateFilter === "2023-2024")
          return eventYear === 2023 || eventYear === 2024;
        if (dateFilter === "2024-2025")
          return eventYear === 2024 || eventYear === 2025;
        return true;
      })();
    const matchesTag =
      tagFilter === "" || event.tag.includes(tagFilter.toLowerCase());
    return matchesSearch && matchesDate && matchesTag;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <SearchBar
          searchQuery={searchQuery}
          dateFilter={dateFilter}
          tagFilter={tagFilter}
          handleSearch={handleSearch}
          handleDateFilter={handleDateFilter}
          handleTagFilter={handleTagFilter}
        />
        <EventList events={paginatedData} formatEventDate={formatEventDate} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
      <div className="w-full flex justify-center">
        <span>©2024 Wellness Retreats. All rights reserved</span>
      </div>
    </>
  );
};

export default FetchedData;
