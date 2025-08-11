import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-white p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Gridrr</h1>
        <div className="prose prose-invert">
          <p className="text-gray-300 mb-6">
            Gridrr is a creative platform where designers showcase their portfolios and discover inspiring work from the community.
          </p>
          <p className="text-gray-300 mb-6">
            Our mission is to connect talented designers with opportunities and provide a space for creative expression and collaboration.
          </p>
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
