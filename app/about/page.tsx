// import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getSortedContentData, PostMetadata } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'About | Quy-Anh Dang',
  description: 'Learn more about Quy-Anh Dang - a Machine Learning Researcher and Data Scientist.'
};

const education = [
  {
    degree: "Master's Degree in Data Science",
    school: 'VNU University of Science',
    period: 'June 2023 - Present',
  },
  {
    degree: "Bachelor's Degree in Applied Mathematics and Computer Science",
    school: 'VNU University of Science',
    period: 'September 2019 - June 2023',
    details: 'CPA: 3.71 / 4.0',
  },
];

const experience = [
  {
    title: 'Machine Learning Researcher',
    company: 'Knovel Engineering',
    period: 'Jan 2024 - Present',
    location: 'Remote - Singapore',
    achievements: [
      'Research and develop AI solutions focusing on LLM safety and trustworthy AI systems',
      'Explore and build production-ready AI for an intelligent survey system',
      'Utilize frameworks such as Weights & Biases, MLflow, and TrueLen to track/evaluate RAG systems and LLMs',
      'Conduct proof-of-concept AI applications for assistant tender problems',
      'Build pipelines with GPT-4 and LlamaIndex integration',
    ],
  },
  {
    title: 'Full-Stack Data Scientist',
    company: 'Wingsmob Studio',
    period: 'Jun 2023 - Sep 2024',
    location: 'Hanoi, Vietnam',
    achievements: [
      'Designed and implemented automated pipelines to extract data from Adjust to S3 and BigQuery',
      'Developed dynamic dashboards to monitor and enhance user experience, reducing dropout rates by 50%',
      'Built a model to estimate ROAS with <5% error, optimizing marketing strategies',
      'Skills: Data Engineering, ETL, GCP, BigQuery, Python, SQL',
    ],
  },
];

const skills = [
  { category: 'Core Skills', items: ['Mathematics', 'Statistics', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'] },
  { category: 'Technologies', items: ['Python', 'PyTorch', 'TensorFlow', 'PySpark', 'FastAPI', 'Docker'] },
  { category: 'Tools & Platforms', items: ['MLflow', 'Weights & Biases', 'Power BI', 'Tableau', 'Azure', 'AWS', 'GCP'] },
];

const achievements = [
  'Winter Mathematic Camp 2025 - National University of Singapore Scholarship',
  'Top 3 (4090 Track) and Top 8 (A100 Track), NeurIPS LLM 2023 Competition',
  'Top 6 finalist, International Data Analysis Olympiad 2022',
  'First prize at university-level conference for student scientific research, 2023',
  'Outstanding Academic Achievement Award: 2020-2023',
];

const teaching = [
  'CS660/CS760 Artificial Intelligence Fall 2024, The University of Alabama at Birmingham',
  'Generative AI 2024 (K2, K3), DataScience.Kan',
  'Machine Learning Operations 2023, DataScience.Kan',
  'Machine Learning Handson 2022, DataScience.Kan',
  'Data Structures and Algorithms 2022, VNU University of Science',
];

const certificates = [
  'Data Science Track, Developer Circles from Facebook',
  'Data Science Career Path, Codecademy',
  'Coursera: Machine Learning Specialization',
  'Coursera: Deep Learning Specialization',
  'Coursera: GANs Specialization',
  'Coursera: NLP Specialization',
  'Coursera: Machine Learning Engineering for Production (MLOps)',
];

const languages = [
  {
    language: 'English',
    proficiency: 'Capable of understanding and writing English documents proficiently.',
  },
];

export default async function AboutPage() {
  const allProjects = await getSortedContentData('projects');
  const allPublications = await getSortedContentData('research');
  
  // Get the 3 most recent projects and publications
  const featuredProjects = allProjects.slice(0, 3);
  const publications = allPublications.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Profile Section */}
      <div className="md:flex md:items-center md:justify-between mb-16">
        <div className="md:flex-1">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
            I&apos;m Quy-Anh Dang, a Machine Learning Researcher and Data Scientist with a strong background in mathematics and computer science.
            I specialize in developing AI solutions, particularly in LLM safety, trustworthy AI systems, and production-ready
            machine learning applications.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.degree} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-2">{edu.school}</p>
              <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
              {edu.details && <p className="text-indigo-600 dark:text-indigo-400 mt-2">{edu.details}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.title} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">{job.company}</p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                <span>{job.period}</span>
                <span className="mx-2">•</span>
                <span>{job.location}</span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {job.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-200">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Publications</h2>
        <div className="space-y-6">
          {publications.map((pub: PostMetadata) => (
            <div key={pub.title} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{pub.title}</h3>
              <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-3 gap-x-2">
                <span>{pub.journal || pub.conference} ({new Date(pub.date).getFullYear()})</span>
              </div>
              <p className="text-gray-600 dark:text-gray-200 mb-2">
                <span className="font-medium">Authors:</span> QuyAnh, et al.              
              </p>
              <p className="text-gray-600 dark:text-gray-200 mb-3">{pub.description}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Link 
                  href={`/research/${pub.id}`}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read more →
                </Link>
                {pub.link && (
                  <Link 
                    href={pub.link}
                    target="_blank"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Publication
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/research"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            View All Publications →
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <ul className="space-y-4">
            {featuredProjects.map((project: PostMetadata) => (
              <li key={project.title} className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                <div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    {project.title}
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                        {typeof project.technologies === 'string' ? project.technologies : project.technologies.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
            <Link
              href="/projects"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Teaching Experience */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Teaching Experience</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <ul className="space-y-3">
            {teaching.map((position, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-200">{position}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Language Proficiencies */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Language Proficiencies</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          {languages.map((lang) => (
            <div key={lang.language} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span className="font-medium text-gray-900 dark:text-white md:w-24">{lang.language}:</span>
              <span className="text-gray-600 dark:text-gray-300">{lang.proficiency}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Achievements</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-200">{achievement}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Certificates</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <ul className="space-y-3">
            {certificates.map((cert, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-200">{cert}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact & Social Media */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact & Connect</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                Feel free to reach out for collaborations, research opportunities, or just to say hello!
              </p>
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:dangquyanh150101@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">dangquyanh150101@gmail.com</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Social Media</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <a href="https://github.com/QuyAnh2005" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <a href="https://www.linkedin.com/in/quy-anh-dang-2490372b5" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.543 7.104c.014.211.014.423.014.636 0 6.507-4.954 14.01-14.01 14.01v-.004a13.94 13.94 0 0 1-7.547-2.21 9.88 9.88 0 0 0 7.293-2.037 4.93 4.93 0 0 1-4.6-3.42 4.92 4.92 0 0 0 2.223-.084A4.924 4.924 0 0 1 .96 9.167v-.062a4.88 4.88 0 0 0 2.235.616A4.927 4.927 0 0 1 1.67 3.148a13.982 13.982 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
                  </svg>
                  <a href="https://x.com/quyanh205" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                    <path d="M10.222 14.889h3.556v1.778h-3.556z" />
                    <path d="M9.333 17.556h5.334v1.778H9.333z" />
                  </svg>
                  <a href="https://scholar.google.com/citations?user=Ah8Gk54AAAAJ&hl=en&oi=ao" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Google Scholar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
