// Link is not used in this file
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0f0f0f] border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-100 text-sm">
              © {new Date().getFullYear()} Alex Chen. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/alexchen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://twitter.com/alexchen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/alexchen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:alex.chen@example.com" 
              className="text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
