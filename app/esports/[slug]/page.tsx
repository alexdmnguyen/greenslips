import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { articles } from '@/lib/data/articles';
import { sports } from '@/lib/data/sports';
import { getArticleSubcategory } from '@/lib/utils';
import type { Metadata } from 'next';

interface EsportPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return sports
    .filter((s) => s.category === 'esports')
    .map((sport) => ({
      slug: sport.slug,
    }));
}

export async function generateMetadata({ params }: EsportPageProps): Promise<Metadata> {
  const sport = sports.find((s) => s.slug === params.slug && s.category === 'esports');

  if (!sport) {
    return {
      title: 'Esport Not Found - SAMBO SENTRAL',
    };
  }

  return {
    title: `${sport.name} - SAMBO SENTRAL`,
    description: sport.description,
  };
}

export default function EsportPage({ params }: EsportPageProps) {
  const sport = sports.find((s) => s.slug === params.slug && s.category === 'esports');

  if (!sport) {
    notFound();
  }

  const sportArticles = articles.filter(
    (a) => a.categories?.includes(sport.slug)
  );

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <span className="text-6xl">{sport.icon}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            {sport.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
            {sport.description}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest {sport.name} Articles
            </h2>
            <p className="text-gray-400 text-lg">
              Tournament coverage, team news, and competitive analysis
            </p>
          </div>

          {sportArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sportArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {(() => {
                      const subcategory = getArticleSubcategory(article.categories);
                      return (
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {article.sport}
                          </span>
                          {subcategory && (
                            <span className="bg-slate-900/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {subcategory}
                            </span>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <TrendingUp className="h-4 w-4" />
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold text-sm"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No articles available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
