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
    <div className="bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back to Articles Link */}
        <div className="mb-8">
          <Link href="/articles" className="text-sm font-medium text-green-600 hover:text-green-800">
            &larr; Back to Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12">
          
          {/* Main Article Content */}
          <div className="lg:col-span-2">
            <div className="prose lg:prose-lg max-w-none">
              
              {/* Article Header */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 !mb-3">
                    {article.title}
                </h1>
                <p className="text-base text-gray-500">
                    By {article.author} &bull; {article.date}
                </p>
                <hr className="mt-6" />
              </div>

              {/* Centered Image */}
              <div className="relative w-full h-80 my-8 shadow-md">
                  <Image
                    src={article.imageUrl}
                    alt={`Header for ${article.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                    priority
                  />
              </div>
              
              {/* Article Body */}
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
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
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Related Posts</h3>
                <ul className="space-y-6">
                  {relatedArticles.map(related => (
                    <li key={related.slug}>
                      <Link href={`/articles/${related.slug}`} className="group">
                        <span className="font-semibold text-gray-700 group-hover:text-green-600 transition-colors">{related.title}</span>
                        <p className="text-sm text-gray-500 mt-1">{related.excerpt.substring(0, 80)}...</p>
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