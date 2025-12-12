import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp } from 'lucide-react';
import EmojiParticles from '@/components/EmojiParticles';
import { articles } from '@/lib/data/articles';
import { sports } from '@/lib/data/sports';
import { getArticleSubcategory } from '@/lib/utils';

export default function Home() {
  const latestArticles = articles.slice(0, 6);
  const exploreSports = sports.filter(s => s.category === 'sports');
  const exploreEsports = sports.filter(s => s.category === 'esports');

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[520px] md:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-900 px-6 py-16 md:py-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 saturate-110"
        >
          <source src="https://videos.pexels.com/video-files/27951104/12271600_2560_1440_24fps.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to <span className="gradient-text">SAMBO SENTRAL</span>!
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Your one-stop source for the latest news, rumors, and predictions.
          </p>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg text-base md:text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            View All Sports Articles
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Sports
            </h2>
            <p className="text-gray-400 text-lg">
              Choose your favorite sport to get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exploreSports.map((sport) => (
              <Link
                key={sport.id}
                href={`/sports/${sport.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-700/70 ring-1 ring-slate-600/60 bg-gradient-to-br from-slate-800 via-slate-800/70 to-slate-900 hover:border-blue-500 hover:ring-blue-500/60 transition-all duration-800 shadow-none hover:shadow-2xl hover:shadow-blue-900/40"
              >
                <div className="relative h-48 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="absolute inset-0 transition-all duration-700 opacity-100 group-hover:opacity-0">
                    <Image
                      src={sport.image}
                      alt={sport.name}
                      fill
                      className="object-cover w-full h-full blur-[3px] brightness-[0.45] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
                  </div>
                  <div className="absolute inset-0 opacity-0 mix-blend-screen bg-[radial-gradient(circle_at_20%_30%,rgba(148,163,184,0.2),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_40%_80%,rgba(79,70,229,0.2),transparent_30%)] transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-0 blur-[1px] pointer-events-none select-none transition-opacity duration-700 group-hover:opacity-30">
                    {sport.icon}
                  </div>
                  <EmojiParticles emoji={sport.icon} seed={sport.slug} />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/75 border border-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-lg shadow-black/40 z-10">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    Featured Sport
                  </div>
                </div>
                <div className="relative p-6 space-y-3 flex-1">
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-900/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{sport.icon}</div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors drop-shadow-[0_2px_12px_rgba(59,130,246,0.45)]">
                        {sport.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-100 line-clamp-1">
                      {sport.description}
                    </p>
                  </div>
                  <div className="flex justify-end text-sm text-blue-100 mt-3">
                    <span className="inline-flex items-center gap-1">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Esports
            </h2>
            <p className="text-gray-400 text-lg">
              Pick your favorite esport to dive into coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exploreEsports.map((sport) => (
              <Link
                key={sport.id}
                href={`/esports/${sport.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-700/70 ring-1 ring-slate-600/60 bg-gradient-to-br from-slate-800 via-slate-800/70 to-slate-900 hover:border-indigo-500 hover:ring-indigo-500/60 transition-all duration-800 shadow-none hover:shadow-2xl hover:shadow-indigo-900/40"
              >
                <div className="relative h-48 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="absolute inset-0 transition-all duration-700 opacity-100 group-hover:opacity-0">
                    <Image
                      src={sport.image}
                      alt={sport.name}
                      fill
                      className="object-cover w-full h-full blur-[3px] brightness-[0.45] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
                  </div>
                  <div className="absolute inset-0 opacity-0 mix-blend-screen bg-[radial-gradient(circle_at_20%_30%,rgba(148,163,184,0.2),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.2),transparent_28%),radial-gradient(circle_at_40%_80%,rgba(79,70,229,0.2),transparent_30%)] transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-0 blur-[1px] pointer-events-none select-none transition-opacity duration-700 group-hover:opacity-30">
                    {sport.icon}
                  </div>
                  <EmojiParticles emoji={sport.icon} seed={sport.slug} />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/75 border border-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-lg shadow-black/40 z-10">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    Featured Esport
                  </div>
                </div>
                <div className="relative p-6 space-y-3 flex-1">
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-indigo-900/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{sport.icon}</div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors drop-shadow-[0_2px_12px_rgba(99,102,241,0.45)]">
                        {sport.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-100 line-clamp-1">
                      {sport.description}
                    </p>
                  </div>
                  <div className="flex justify-end text-sm text-indigo-100 mt-3">
                    <span className="inline-flex items-center gap-1">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-gray-400 text-lg">
                Stay up to date with the latest news and analysis
              </p>
            </div>
            <Link
              href="/articles"
              className="hidden md:flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold"
            >
              View All
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
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

          <div className="text-center mt-12 md:hidden">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Articles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
