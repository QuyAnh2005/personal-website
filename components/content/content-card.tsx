import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { PostMetadata } from '@/lib/mdx';

interface ContentCardProps {
  item: PostMetadata;
  type: 'blog' | 'projects' | 'research';
}

export function ContentCard({ item, type }: ContentCardProps) {
  const formattedDate = format(new Date(item.date), 'MMMM d, yyyy');

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-all hover:shadow-md">
      {type === 'projects' && (
        <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
          <Image 
            src={`/images/projects/${item.id}.jpg`} 
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            <Link href={`/${type}/${item.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {item.title}
            </Link>
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>
        
        {type === 'research' && item.conference && (
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span className="font-medium">Published in:</span> {item.conference || item.journal}
          </div>
        )}
        
        {type === 'projects' && item.technologies && (
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Technologies:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {item.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {item.tags && (
          <div className="flex flex-wrap gap-1 mb-3">
            {item.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <Link 
          href={`/${type}/${item.id}`}
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
