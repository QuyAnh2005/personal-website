import { getSortedContentData } from '@/lib/mdx';
import { ContentList } from '@/components/content/content-list';
import { Suspense } from 'react';

export const metadata = {
  title: 'Blog | Alex Chen',
  description: 'Articles on machine learning, AI research, and computer vision by Alex Chen.'
};

export default async function BlogPage() {
  const blogPosts = await getSortedContentData('blog');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Thoughts, tutorials, and insights on machine learning, AI research, and computer vision.
        </p>
      </div>
      
      <Suspense fallback={<div>Loading blog posts...</div>}>
        <ContentList items={blogPosts} type="blog" />
      </Suspense>
    </div>
  );
}
