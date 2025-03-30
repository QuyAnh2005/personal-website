import Image from "next/image";
import Link from "next/link";
import { getSortedContentData } from "@/lib/mdx";
import { FaArrowRight } from "react-icons/fa";

export default async function Home() {
  // Get the latest blog posts, projects, and research publications
  const allBlogPosts = await getSortedContentData('blog');
  const allProjects = await getSortedContentData('projects');
  const allPublications = await getSortedContentData('research');
  
  const latestBlogPosts = allBlogPosts.slice(0, 3);
  const featuredProjects = allProjects.slice(0, 2);
  const recentPublications = allPublications.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Quy-Anh Dang
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6">
              Machine Learning Researcher
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-100 mb-8">
            Machine Learning Researcher at Knovel Engineering, focusing on LLM safety and trustworthy AI systems. Master's student in Data Science at VNU.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                About Me
              </Link>
              <Link 
                href="/research" 
                className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Research
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
              <Image 
                src="/images/profile.jpg" 
                alt="Alex Chen" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Latest Blog Posts</h2>
          <Link 
            href="/blog" 
            className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
          >
            View All <FaArrowRight className="ml-2" size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestBlogPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow dark:bg-gray-800 flex flex-col h-full">
              <div className="p-5 flex flex-col flex-grow">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-300">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">{post.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags && post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="text-sm font-medium text-blue-600 dark:text-blue-300 hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Featured Projects</h2>
          <Link 
            href="/projects" 
            className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
          >
            View All <FaArrowRight className="ml-2" size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow dark:bg-gray-800 flex flex-col">
              <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
                <Image 
                  src={`/images/projects/${project.id}.jpg`} 
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    <Link href={`/projects/${project.id}`} className="hover:text-blue-600 dark:hover:text-blue-300">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs bg-blue-100 dark:bg-cyan-400 text-blue-800 dark:text-gray-900 px-2 py-1 rounded font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-auto pt-4">
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="text-sm font-medium text-blue-600 dark:text-blue-300 hover:underline"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Recent Publications */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Recent Publications</h2>
          <Link 
            href="/research" 
            className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
          >
            View All <FaArrowRight className="ml-2" size={14} />
          </Link>
        </div>
        <div className="space-y-4">
          {recentPublications.map((publication) => (
            <div key={publication.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow dark:bg-gray-800 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  <Link href={`/research/${publication.id}`} className="hover:text-blue-600 dark:hover:text-blue-300">
                    {publication.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {publication.conference || publication.journal}, {new Date(publication.date).getFullYear()}
                </p>
                <p className="text-gray-700 dark:text-gray-200 mb-4">{publication.description}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex flex-wrap gap-1">
                  {publication.tags && publication.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/research/${publication.id}`} 
                  className="text-sm font-medium text-blue-600 dark:text-blue-300 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
