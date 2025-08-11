import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/404-illustration.svg"
            alt="404 Not Found"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
          404
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Back to Home
          </Link>
          
          <a 
            href="mailto:contact@gridrr.com" 
            className="border border-gray-700 hover:border-yellow-500 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Or check out our{' '}
            <Link href="/" className="text-yellow-400 hover:underline">homepage</Link>{' '}
            to find what you're looking for.
          </p>
        </div>
      </div>
    </div>
  );
}
