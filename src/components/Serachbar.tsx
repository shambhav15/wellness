import React from 'react';
import { Input } from './ui/input';

interface SearchBarProps {
  searchQuery: string;
  dateFilter: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, dateFilter, handleSearch, handleDateFilter }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      <select
        className="p-2 rounded-xl border border-[#D5B990] focus:outline-none focus:ring-2 focus:ring-[#D5B990] focus:border-transparent w-full md:w-auto"
        name="date"
        aria-label="Filter by Date"
        id="filter-date"
        onChange={handleDateFilter}
        value={dateFilter}
      >
        <option value="">Filter By Date</option>
        <option value="2023-2024">2023-2024</option>
        <option value="2024-2025">2024-2025</option>
      </select>
      <select
        className="p-2 rounded-xl border border-[#D5B990] focus:outline-none focus:ring-2 focus:ring-[#D5B990] focus:border-transparent w-full md:w-auto"
        name="type"
        aria-label="Filter by Type"
        id="filter-type"
        onChange={handleDateFilter}
        value={dateFilter}
      >
        <option value="">Filter By Type</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
      <div className="flex w-full">
        <Input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search retreats by title"
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
      </div>
    </div>
  );
};

export default SearchBar;
