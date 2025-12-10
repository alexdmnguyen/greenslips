import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Newspaper, TrendingUp } from 'lucide-react';
import { sports } from '@/lib/data/sports';
import { articles } from '@/lib/data/articles';
import { getArticleSubcategory } from '@/lib/utils';
import type { Metadata } from 'next';

interface SportNewsProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return sports
    .filter((s) => s.category === 'sports')
    .map((sport) => ({ slug: sport.slug }));
}

export async function generateMetadata({ params }: SportNewsProps): Promise<Metadata> {
  const sport = sports.find((s) => s.slug === params.slug && s.category === 'sports');
  if (!sport) {
    return { title: 'Sport Not Found - SAMBO SENTRAL' };
  }
  return {
    title: `${sport.name} News - SAMBO SENTRAL`,
    description: `News hub for ${sport.name}.`,
  };
}

export default function SportNewsPage({ params }: SportNewsProps) {
  const sport = sports.find((s) => s.slug === params.slug && s.category === 'sports');
  if (!sport) {
    notFound();
  }

  const sportArticles = articles.filter(
    (a) => a.categories?.includes(`${sport.slug}-news`)
  );

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <Newspaper className="h-14 w-14 text-blue-500 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-white mb-3">{sport.name} News</h1>
          <p className="text-lg text-gray-400">
            Latest headlines and storylines for {sport.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sportArticles.length === 0 && (
            <div className="col-span-full text-center text-gray-400">
              No news posts yet. Check back soon.
            </div>
          )}
          {sportArticles.map((article) => (
            <div
              key={article.id}
              className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-blue-500 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {article.sport}
                </span>
                {getArticleSubcategory(article.categories) && (
                  <span className="bg-slate-900/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {getArticleSubcategory(article.categories)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                <TrendingUp className="h-4 w-4" />
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{article.title}</h3>
              <p className="text-gray-400 line-clamp-2 mb-4">{article.excerpt}</p>
              <Link
                href={`/articles/${article.slug}`}
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
