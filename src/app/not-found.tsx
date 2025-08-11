import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col items-center justify-center p-4 sm:p-6 text-center">
      <div className="w-full max-w-3xl mx-auto">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6 sm:mb-8">
          <Image
            src="/404-illustration.svg"
            alt="404 Not Found"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 12rem, 16rem"
          />
        </div>
        
        <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4 sm:mb-6">
          404
        </h1>
        
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
          <Link 
            href="/" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-200 text-sm sm:text-base flex-1 sm:flex-none text-center"
          >
            Back to Home
          </Link>
          
          <a 
            href="mailto:contact@gridrr.com" 
            className="border border-gray-700 hover:border-yellow-500 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-200 text-sm sm:text-base flex-1 sm:flex-none text-center"
          >
            Contact Support
          </a>
        </div>
        
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-xs sm:text-sm">
            Or check out our{' '}
            <Link href="/" className="text-yellow-400 hover:underline hover:text-yellow-300 transition-colors">
              homepage
            </Link>{' '}
            to find what you're looking for.
          </p>
        </div>
      </div>
    </div>
  );
}
