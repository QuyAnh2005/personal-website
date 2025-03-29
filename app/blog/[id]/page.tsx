import { getAllContentIds, getContentData } from '@/lib/mdx';
import Link from 'next/link';
import 'katex/dist/katex.min.css';
import { format } from 'date-fns';
import { FaCalendar, FaTag } from 'react-icons/fa';
import { MarkdownContent } from '@/components/content/markdown-content';

export async function generateStaticParams() {
  const posts = await getAllContentIds('blog');
  return posts;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Access the id directly from params
  const id = params.id;
  const post = await getContentData('blog', id);
  return {
    title: `${post.title} | Alex Chen Blog`,
    description: post.description
  };
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  // Access the id directly from params
  const id = params.id;
  const post = await getContentData('blog', id);
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline mb-6 inline-block"
        >
          ← Back to all posts
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center mr-6">
                <FaCalendar className="mr-2" />
                <span>{formattedDate}</span>
              </div>
              
              {post.tags && (
                <div className="flex items-center">
                  <FaTag className="mr-2" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <Link 
                        key={tag} 
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {post.description}
            </p>
          </header>
          
          <MarkdownContent content={post.contentHtml} />
        </article>
      </div>
    </div>
  );
}
