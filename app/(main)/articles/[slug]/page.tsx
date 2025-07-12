import { allArticles } from '@/app/data/articles';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

// This function generates the static paths for all articles at build time
export async function generateStaticParams() {
  return allArticles.map(article => ({
    slug: article.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params; // Await the params Promise
  const article = allArticles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Find a few related articles (excluding the current one)
  const relatedArticles = allArticles.filter(a => a.slug !== slug).slice(0, 3);

  // Social Share URLs
  const pageUrl = `https://your-website.com/articles/${slug}`; // Replace with your actual domain
  const shareText = `Check out this article: ${article.title}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;

  return (
    <div className="bg-gray-50 pt-12">
      {/* Centered Image with Border Radius */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-96 shadow-lg">
            <Image
              src={article.imageUrl}
              alt={`Header for ${article.title}`}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl" // Applied border radius
              priority
            />
        </div>
      </div>

      {/* Main Content with Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12">
          
          {/* Article Content */}
          <div className="prose lg:prose-xl max-w-none lg:col-span-2 bg-white p-6 md:p-10 rounded-lg shadow-sm">
            {/* New Title and Author Container */}
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 !mb-4">
                    {article.title}
                </h1>
                <p className="text-lg text-gray-500">
                    By {article.author} • {article.date}
                </p>
                <hr className="mt-6" />
            </div>
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-8">
              
              {/* Social Share Card */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Share This Article</h3>
                <div className="flex space-x-4">
                  <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>
                </div>
              </div>

              {/* Related Articles Card */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Related Articles</h3>
                <ul className="space-y-4">
                  {relatedArticles.map(related => (
                    <li key={related.slug}>
                      <Link href={`/articles/${related.slug}`} className="group">
                        <span className="font-semibold text-gray-700 group-hover:text-green-600 transition-colors">{related.title}</span>
                        <p className="text-sm text-gray-500">{related.excerpt.substring(0, 70)}...</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}