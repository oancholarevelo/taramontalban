// app/components/ArticleCard.tsx
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export default function ArticleCard({ title, excerpt, author, date, imageUrl, slug }: Props) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/articles/${slug}`}>
        <Image src={imageUrl} alt={`Image for article: ${title}`} width={600} height={400} className="w-full h-56 object-cover" />
      </Link>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">By {author} • {date}</p>
        <h3 className="text-2xl font-bold mb-3 text-gray-900">
          <Link href={`/articles/${slug}`} className="hover:text-green-700 transition-colors">{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link href={`/articles/${slug}`} className="font-semibold text-green-600 hover:underline">Read More &rarr;</Link>
      </div>
    </div>
  );
}