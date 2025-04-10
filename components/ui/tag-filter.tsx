"use client";

// useState is not used in this component

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export function TagFilter({ tags, selectedTag, onSelectTag }: TagFilterProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Filter by Topic</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-2 py-1 rounded-full text-xs font-medium ${selectedTag === null
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          onClick={() => onSelectTag(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-2 py-1 rounded-full text-xs font-medium ${selectedTag === tag
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'}`}
            onClick={() => onSelectTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
