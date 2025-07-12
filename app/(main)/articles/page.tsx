// app/(main)/articles/page.tsx
import ArticleCard from '@/app/components/ArticleCard';
import { allArticles } from '@/app/data/articles';

export default function ArticlesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Featured Articles</h1>
        <p className="mt-2 text-lg text-gray-600">Discover the hidden gems and stories of our town.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allArticles.map(article => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            author={article.author}
            date={article.date}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
            slug={article.slug}
          />
        ))}
      </div>
    </div>
  );
}