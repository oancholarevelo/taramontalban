import Link from 'next/link';

interface Props {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  tags?: string[];
  imageUrl: string;
}

export default function ArticleCard({ title, excerpt, author, date, slug, tags = [] }: Props) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="block group bg-white rounded-lg border border-gray-200 p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span key={tag} className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
      )}

      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
        {excerpt}
      </p>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500">By {author} • {date}</p>
      </div>
    </Link>
  );
}