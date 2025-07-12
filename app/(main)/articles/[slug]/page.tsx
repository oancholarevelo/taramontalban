import { allArticles } from '@/app/data/articles';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

// Generate static paths for all articles
export async function generateStaticParams() {
  return allArticles.map(article => ({
    slug: article.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params; // Await the params Promise to get the slug
  const article = allArticles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Cover Photo Container */}
      <div className="w-full bg-white pt-8 pb-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative w-full h-96 shadow-lg">
            <Image
              src={article.imageUrl}
              alt={`Header for ${article.title}`}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{article.title}</h1>
          <p className="mt-4 text-md text-gray-500">By {article.author} • {article.date}</p>
        </div>
        <article className="prose lg:prose-xl max-w-none">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}