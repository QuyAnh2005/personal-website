"use client";

import { useState } from 'react';
import { ContentCard } from './content-card';
import { TagFilter } from '../ui/tag-filter';
import { Search } from '../ui/search';

// Define the PostMetadata type locally instead of importing from server component
interface PostMetadata {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  link?: string;
  technologies?: string[];
  conference?: string;
  journal?: string;
}

interface ContentListProps {
  items: PostMetadata[];
  type: 'blog' | 'projects' | 'research';
}

export function ContentList({ items, type }: ContentListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Client-side implementation of getAllTags
  const getAllTagsClient = (content: PostMetadata[]) => {
    const allTags = content.reduce((tags: string[], item) => {
      if (item.tags) {
        item.tags.forEach(tag => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        });
      }
      return tags;
    }, []);
    
    return allTags.sort();
  };
  
  // Client-side implementation of filterContentByTag
  const filterContentByTagClient = (content: PostMetadata[], tag: string | null) => {
    if (!tag) return content;
    return content.filter(item => item.tags && item.tags.includes(tag));
  };
  
  // Client-side implementation of filterContentBySearch
  const filterContentBySearchClient = (content: PostMetadata[], search: string | null) => {
    if (!search) return content;
    const searchLower = search.toLowerCase();
    return content.filter(item => {
      return (
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      );
    });
  };
  
  const tags = getAllTagsClient(items);
  
  let filteredItems = filterContentByTagClient(items, selectedTag);
  filteredItems = filterContentBySearchClient(filteredItems, searchTerm);
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <div className="order-2 md:order-1">
          <TagFilter 
            tags={tags} 
            selectedTag={selectedTag} 
            onSelectTag={setSelectedTag} 
          />
        </div>
        
        <div className="order-1 md:order-2">
          <Search onSearch={handleSearch} />
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600 dark:text-gray-200">No items found for the current filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredItems.map((item: PostMetadata) => (
                <ContentCard key={item.id} item={item} type={type} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
