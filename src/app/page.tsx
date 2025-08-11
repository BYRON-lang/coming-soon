import Image from "next/image";
import Link from "next/link";
import RotatingText from "@/components/RotatingText";
import ScrollingGallery from "@/components/ScrollingGallery";
import ScrollingTags from "@/components/ScrollingTags";
import SocialLinks from "@/components/SocialLinks";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] ">
      <TopBanner />
      <div className="mx-80 pt-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="invert brightness-0">
              <Image 
                src="/logo-dark.png" 
                alt="Logo" 
                width={0}
                height={40}
                sizes="100vw"
                style={{ width: 'auto', height: '30px' }}
                priority
              />
            </div>
            <span className="text-gray-400 text-2xl font-sans font-bold">Gridrr</span>
          </div>
          <nav className="flex space-x-8">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">About</Link>
            <a 
              href="https://jobs.gridrr.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              Jobs & Gigs
            </a>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">Contact Us</Link>
          </nav>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="mx-80 mt-50 flex justify-between items-start">
        <div>
          <h1 className="text-7xl font-sans font-black leading-tight bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            OUR NEW WEBSITE IS
          </h1>
          <p className="mt-8 text-gray-400 text-xl font-sans font-medium max-w-2xl">
            A creative platform where designers showcase their portfolios and discover inspiring work from the community.
          </p>
          <div className="mt-16">
            <RotatingText />
          </div>
          
          <div className="w-full mt-12 max-w-4xl ml-48 px-4">
            <p className="text-gray-200 text-base leading-relaxed tracking-wide">
              We regret any inconvenience caused. Our site is currently under rebranding and maintenance
              to ensure high performance and an enhanced user experience. Thank you for your patience.
            </p>
          </div>
          
          <div className="w-full mt-12">
            <ScrollingGallery />
          </div>
          
          <div className="mt-16">
            <p className="text-gray-400 text-lg text-center mb-6">Follow us on social media</p>
            <SocialLinks />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 transform -rotate-90 origin-right">
            <span className="text-8xl font-sans font-black bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text text-transparent">
              COMING SOON
            </span>
          </div>
        </div>
      </div>
      
      {/* Yellow Banner */}
      <div className="w-screen bg-yellow-400 text-black mt-12 md-12 py-3 overflow-hidden">
        <ScrollingTags />
      </div>
    </main>
  )
}
