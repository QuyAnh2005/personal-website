import { getSortedContentData } from '@/lib/mdx';
import { ContentList } from '@/components/content/content-list';

export const metadata = {
  title: 'Projects | Alex Chen',
  description: 'Machine learning and AI research projects by Alex Chen.'
};

export default async function ProjectsPage() {
  const projects = await getSortedContentData('projects');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          A collection of machine learning and AI research projects I&apos;ve developed, focusing on computer vision, 
          reinforcement learning, and natural language processing.
        </p>
      </div>
      
      <ContentList items={projects} type="projects" />
    </div>
  );
}
