'use client';

import React, { useEffect, useRef } from 'react';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Add a useEffect to render math equations using KaTeX
  useEffect(() => {
    if (typeof window !== 'undefined' && contentRef.current) {
      // This will ensure KaTeX renders math equations after the content is loaded
      if ((window as any).renderMathInElement && contentRef.current) {
        (window as any).renderMathInElement(contentRef.current, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
      }
    }
  }, [content]);

  return (
    <div 
      ref={contentRef}
      className="markdown-content prose dark:prose-invert prose-lg max-w-none dark:bg-transparent
                prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-headings:block prose-headings:w-full
                prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4 prose-h1:leading-tight
                prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-4 prose-h2:leading-tight
                prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-2 prose-h3:leading-snug
                prose-p:my-4 prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-p:leading-relaxed dark:prose-p:bg-transparent
                prose-strong:font-bold prose-strong:text-gray-900 dark:prose-strong:text-white
                prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-li:my-2 prose-li:text-gray-800 dark:prose-li:text-gray-200 prose-li:leading-relaxed dark:prose-li:bg-transparent
                prose-ul:list-disc prose-ul:pl-6 prose-ol:pl-6 dark:prose-ul:bg-transparent dark:prose-ol:bg-transparent
                prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-md
                prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
                prose-img:rounded-lg prose-img:my-6 prose-img:mx-auto
                math:text-gray-900 dark:math:text-gray-100"
      style={{ background: 'transparent' }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
