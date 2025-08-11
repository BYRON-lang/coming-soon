import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="prose prose-invert">
          <p className="text-gray-300 mb-6">
            Have questions or feedback? We'd love to hear from you!
          </p>
          
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="text-yellow-400 font-medium">Email</h3>
              <a 
                href="mailto:contact@gridrr.com" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                contact@gridrr.com
              </a>
            </div>
            
            <div>
              <h3 className="text-yellow-400 font-medium">Follow Us</h3>
              <p className="text-gray-300">
                Stay connected with us on social media for updates and inspiration.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link 
              href="/" 
              className="text-yellow-400 hover:underline inline-flex items-center"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
