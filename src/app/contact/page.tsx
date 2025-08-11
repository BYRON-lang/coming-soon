import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';

export default function ContactPage() {
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
            <Link href="/about" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200 font-medium">About</Link>
            <a 
              href="https://jobs.gridrr.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Jobs & Gigs
            </a>
            <span className="text-xs sm:text-sm md:text-base text-yellow-400 font-medium">Contact</span>
          </nav>
        </header>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-sans font-black bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-8">
            Contact Us
          </h1>
          
          <div className="space-y-6 sm:space-y-8 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              Have questions or feedback? We'd love to hear from you! Our team is here to help and will get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-yellow-400 font-medium text-lg sm:text-xl mb-3">Email Us</h3>
                <a 
                  href="mailto:contact@gridrr.com" 
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="mr-2 group-hover:text-yellow-400 transition-colors">→</span>
                  contact@gridrr.com
                </a>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <h3 className="text-yellow-400 font-medium text-lg sm:text-xl mb-3">Follow Us</h3>
                <p className="mb-4">
                  Stay connected with us on social media for updates, inspiration, and the latest from our community.
                </p>
                <div className="mt-4">
                  <SocialLinks />
                </div>
              </div>
            </div>
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
