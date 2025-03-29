import { getAllContentIds, getContentData } from '@/lib/mdx';
import Link from 'next/link';
import 'katex/dist/katex.min.css';
import { format } from 'date-fns';
import { FaCalendar, FaTag, FaUniversity, FaExternalLinkAlt } from 'react-icons/fa';
import { MarkdownContent } from '@/components/content/markdown-content';

export async function generateStaticParams() {
  const publications = await getAllContentIds('research');
  return publications;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Access the id directly from params
  const id = params.id;
  const publication = await getContentData('research', id);
  return {
    title: `${publication.title} | Alex Chen Research`,
    description: publication.description
  };
}

export default async function ResearchDetail({ params }: { params: { id: string } }) {
  // Access the id directly from params
  const id = params.id;
  const publication = await getContentData('research', id);
  const formattedDate = format(new Date(publication.date), 'MMMM d, yyyy');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/research" 
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline mb-6 inline-block"
        >
          ← Back to all publications
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {publication.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-4 gap-y-2">
              <div className="flex items-center mr-6">
                <FaCalendar className="mr-2" />
                <span>{formattedDate}</span>
              </div>
              
              {publication.conference && (
                <div className="flex items-center mr-6">
                  <FaUniversity className="mr-2" />
                  <span>{publication.conference}</span>
                </div>
              )}
              
              {publication.journal && (
                <div className="flex items-center mr-6">
                  <FaUniversity className="mr-2" />
                  <span>{publication.journal}</span>
                </div>
              )}
              
              {publication.tags && (
                <div className="flex items-center">
                  <FaTag className="mr-2" />
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag: string) => (
                      <Link 
                        key={tag} 
                        href={`/research?tag=${encodeURIComponent(tag)}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {publication.link && (
              <div className="mb-4">
                <a 
                  href={publication.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Publication
                </a>
              </div>
            )}
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {publication.description}
            </p>
          </header>
          
          <MarkdownContent content={publication.contentHtml} />
        </article>
      </div>
    </div>
  );
}
