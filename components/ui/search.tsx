"use client";

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

export function Search({ onSearch, placeholder = "Search by title or description..." }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <input
          type="text"
          className="py-2 px-4 w-full focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="h-full p-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none flex items-center justify-center"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
