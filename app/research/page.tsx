import { getSortedContentData } from '@/lib/mdx';
import { ContentList } from '@/components/content/content-list';

export const metadata = {
  title: 'Research | Quy-Anh Dang',
  description: 'Academic publications and research work by Quy-Anh Dang in machine learning and AI.'
};

export default async function ResearchPage() {
  const publications = await getSortedContentData('research');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Research Publications</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          My academic research focuses on advancing machine learning techniques, particularly in the areas of 
          computer vision, reinforcement learning, and large language models.
        </p>
      </div>
      
      <ContentList items={publications} type="research" />
    </div>
  );
}
