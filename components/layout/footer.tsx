// Link is not used in this file
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-8 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-white text-sm">
              © {new Date().getFullYear()} Quy-Anh Dang. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/QuyAnh2005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://x.com/quyanh205" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/quy-anh-dang-2490372b5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:dangquyanh150101@gmail.com" 
              className="text-gray-700 dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-300"
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
