import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">
      {/* Header with navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <header className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-0">
            <div className="invert brightness-0 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10">
              <Image 
                src="/logo-dark.png" 
                alt="Gridrr Logo" 
                width={40}
                height={40}
                className="w-full h-auto"
                priority
                sizes="(max-width: 640px) 28px, (max-width: 768px) 36px, 40px"
              />
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-sans font-bold">Gridrr</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <span className="text-xs sm:text-sm md:text-base text-yellow-400 font-medium">About</span>
            <a 
              href="https://jobs.gridrr.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Jobs & Gigs
            </a>
            <Link href="/contact" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200 font-medium">Contact Us</Link>
          </nav>
        </header>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-sans font-black bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-8">
            About Gridrr
          </h1>
          
          <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              Gridrr is a creative platform where designers showcase their portfolios and discover inspiring work from the community.
            </p>
            <p>
              Our mission is to connect talented designers with opportunities and provide a space for creative expression and collaboration.
            </p>
            <p>
              We believe in the power of design to transform ideas into reality and are committed to building a community that fosters creativity, innovation, and growth.
            </p>
          </div>
          
          <div className="mt-8 sm:mt-10 md:mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-medium group"
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-200">←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
