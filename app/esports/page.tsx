import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Gamepad2 } from 'lucide-react';
import { articles } from '@/lib/data/articles';
import { sports } from '@/lib/data/sports';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Esports Hub - SAMBO SENTRAL',
  description: 'Coverage of VALORANT, CS2, League of Legends, and all major esports tournaments and competitions.',
};

export default function EsportsPage() {
  const esportsArticles = articles.filter((a) => a.category === 'esports');
  const esportsTitles = sports.filter((s) => s.category === 'esports');

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <Gamepad2 className="h-16 w-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Esports Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The latest news, analysis, and predictions from the world of competitive gaming
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse by Game
            </h2>
            <p className="text-gray-400 text-lg">
              Select your favorite esports title
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {esportsTitles.map((sport) => (
              <Link
                key={sport.id}
                href={`/esports/${sport.slug}`}
                className="group relative bg-slate-800 rounded-2xl overflow-hidden card-hover border border-slate-700"
              >
                <div className="relative h-64">
                  <Image
                    src={sport.image}
                    alt={sport.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-4xl mb-2">{sport.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {sport.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {sport.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Esports Articles
            </h2>
            <p className="text-gray-400 text-lg">
              Stay updated with the competitive gaming scene
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {esportsArticles.map((article) => (
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
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.sport}
                    </span>
                  </div>
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
        </div>
      </section>
    </div>
  );
}
