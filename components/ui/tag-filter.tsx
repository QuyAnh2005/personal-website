"use client";

import { useState } from 'react';

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export function TagFilter({ tags, selectedTag, onSelectTag }: TagFilterProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">Filter by Topic</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-3 py-1 rounded-full text-sm ${selectedTag === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          onClick={() => onSelectTag(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-full text-sm ${selectedTag === tag
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
            onClick={() => onSelectTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
