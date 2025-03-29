import React from 'react';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div 
      className="markdown-content prose dark:prose-invert prose-lg max-w-none
                prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
                prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-2
                prose-p:my-4 prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-li:my-2 prose-li:text-gray-700 dark:prose-li:text-gray-300
                prose-ul:list-disc prose-ul:pl-6 prose-ol:pl-6
                prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-md
                prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
                prose-img:rounded-lg prose-img:my-6 prose-img:mx-auto"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
