import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center space-x-6 mt-8">
      <Link 
        href="https://www.instagram.com/gridrrofficial" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="Instagram"
      >
        <FaInstagram className="w-6 h-6" />
      </Link>
      
      <Link 
        href="https://www.linkedin.com/company/gridrr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6" />
      </Link>
      
      <Link 
        href="https://twitter.com/gridrrofficial" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="Twitter"
      >
        <FaTwitter className="w-6 h-6" />
      </Link>
      
      <Link 
        href="https://github.com/gridrrofficial" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="GitHub"
      >
        <FaGithub className="w-6 h-6" />
      </Link>
    </div>
  );
}
