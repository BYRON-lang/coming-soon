import Image from "next/image";
import Link from "next/link";
import RotatingText from "@/components/RotatingText";
import ScrollingGallery from "@/components/ScrollingGallery";
import ScrollingTags from "@/components/ScrollingTags";
import SocialLinks from "@/components/SocialLinks";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] overflow-x-hidden">
      <TopBanner />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Header with responsive navigation */}
        <header className="w-full flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4 px-4 sm:px-0">
          <div className="flex items-center">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0">
              <Image 
                src="/logo-dark.png" 
                alt="Gridrr Logo" 
                width={40}
                height={40}
                className="invert brightness-0 object-contain w-full h-full"
                priority
                sizes="(max-width: 640px) 32px, (max-width: 768px) 36px, 40px"
              />
            </div>
            <span className="ml-2 sm:ml-3 text-2xl md:text-3xl font-sans font-bold text-gray-400 leading-none">
              Gridrr
            </span>
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
            <Link href="/contact" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200 font-medium">Contact Us</Link>
          </nav>
        </header>
      </div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-3/4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black leading-tight bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              OUR NEW WEBSITE IS
            </h1>
            
            <p className="mt-4 sm:mt-6 md:mt-8 text-gray-400 text-base sm:text-lg md:text-xl font-sans font-medium max-w-2xl">
              A creative platform where designers showcase their portfolios and discover inspiring work from the community.
            </p>
            
            <div className="mt-6 sm:mt-10 md:mt-14 lg:mt-16">
              <RotatingText />
            </div>
            
            <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-w-4xl mx-auto lg:mx-0 lg:ml-12 xl:ml-24 px-2 sm:px-4">
              <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide">
                We regret any inconvenience caused. Our site is currently under rebranding and maintenance
                to ensure high performance and an enhanced user experience. Thank you for your patience.
              </p>
            </div>
            
            <div className="w-full max-w-6xl mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4 sm:px-6">
              <div className="relative w-full aspect-video bg-black/20 rounded-lg overflow-hidden">
                <ScrollingGallery />
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
              <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center mb-3 sm:mb-4 md:mb-6">Follow us on social media</p>
              <div className="flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </div>
          
          {/* Coming Soon Text - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block relative w-1/4">
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-right">
              <p className="text-6xl xl:text-7xl 2xl:text-8xl font-black whitespace-nowrap bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 text-transparent bg-clip-text">
                COMING SOON
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Yellow Banner */}
      <div className="w-full bg-yellow-400 text-black mt-12 py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {['Web Design', 'Mobile Apps', 'UI/UX', 'Branding', 'Development', 'Animation', '3D Design', 'Illustration', 'Product Design', 'Motion Graphics', 'Frontend', 'Backend', 'Full Stack', 'React', 'Next.js', 'TypeScript']
            .map((tag, index) => (
              <span key={index} className="inline-block mx-6 text-base sm:text-lg md:text-xl font-bold">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </main>
  )
}
