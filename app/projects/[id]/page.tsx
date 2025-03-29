import { getAllContentIds, getContentData } from '@/lib/mdx';
import Link from 'next/link';
import 'katex/dist/katex.min.css';
import { format } from 'date-fns';
import { FaCalendar, FaTag, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { MarkdownContent } from '@/components/content/markdown-content';

export async function generateStaticParams() {
  const projects = await getAllContentIds('projects');
  return projects;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Await the params object before using its properties
  const id = (await params).id;
  const project = await getContentData('projects', id);
  return {
    title: `${project.title} | Alex Chen Projects`,
    description: project.description
  };
}

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  // Await the params object before using its properties
  const id = (await params).id;
  const project = await getContentData('projects', id);
  const formattedDate = format(new Date(project.date), 'MMMM d, yyyy');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/projects" 
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline mb-6 inline-block"
        >
          u2190 Back to all projects
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-4 gap-y-2">
              <div className="flex items-center mr-6">
                <FaCalendar className="mr-2" />
                <span>{formattedDate}</span>
              </div>
              
              {project.tags && (
                <div className="flex items-center mr-6">
                  <FaTag className="mr-2" />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <Link 
                        key={tag} 
                        href={`/projects?tag=${encodeURIComponent(tag)}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {project.technologies && (
                <div className="flex items-center">
                  <FaCode className="mr-2" />
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {project.link && (
              <div className="mb-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Project Link
                </a>
              </div>
            )}
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </header>
          
          <MarkdownContent content={project.contentHtml} />
        </article>
      </div>
    </div>
  );
}
