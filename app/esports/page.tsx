import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Gamepad2 } from 'lucide-react';
import { articles } from '@/lib/data/articles';
import { sports } from '@/lib/data/sports';
import { getArticleSubcategory } from '@/lib/utils';
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
      <section className="relative min-h-[220px] md:min-h-[240px] flex items-center justify-center overflow-hidden bg-slate-900 px-6 py-16 md:py-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 saturate-110"
        >
          <source src="https://videos.pexels.com/video-files/7849228/7849228-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
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
        <div className="max-w-6xl mx-auto">
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
                className="group relative overflow-hidden rounded-2xl border border-slate-700/70 ring-1 ring-slate-600/60 bg-gradient-to-br from-slate-800 via-slate-800/70 to-slate-900 hover:border-indigo-500 hover:ring-indigo-500/60 transition-all duration-800 shadow-none hover:shadow-2xl hover:shadow-indigo-900/40"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sport.image}
                    alt={sport.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/10" />
                </div>
                <div className="relative p-6 space-y-3 flex-1">
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-indigo-900/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className="flex items-center justify-center gap-3 text-center">
                    <div className="text-3xl">{sport.icon}</div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors drop-shadow-[0_2px_12px_rgba(99,102,241,0.45)]">
                      {sport.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-100 line-clamp-1">
                    {sport.description}
                  </p>
                  <div className="flex justify-end text-sm text-indigo-100 mt-3">
                    <span className="inline-flex items-center gap-1">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
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
        </div>
      </section>
    </div>
  );
}
