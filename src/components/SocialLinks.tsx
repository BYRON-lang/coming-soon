import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
      <Link 
        href="https://www.instagram.com/gridrrofficial" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5"
        aria-label="Instagram"
      >
        <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>
      
      <Link 
        href="https://www.linkedin.com/company/gridrr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>
      
      <Link 
        href="https://twitter.com/gridrrofficial" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5"
        aria-label="Twitter"
      >
        <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>
      
      <Link 
        href="https://github.com/gridrrofficial" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5"
        aria-label="GitHub"
      >
        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>
    </div>
  );
}
