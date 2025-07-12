// app/(main)/articles/[slug]/page.tsx
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

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = allArticles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="bg-white">
        <Image src={article.imageUrl} alt={`Header for ${article.title}`} width={1200} height={400} className="w-full h-64 md:h-96 object-cover" />
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
    </>
  );
}