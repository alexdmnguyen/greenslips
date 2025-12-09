import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { articles } from '@/lib/data/articles';
import { sports } from '@/lib/data/sports';

export default function Home() {
  const latestArticles = articles.slice(0, 6);
  const exploreSports = sports.filter(s => s.category === 'sports');

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-soccer-ball-on-a-field-4097-large.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to <span className="gradient-text">SAMBO SENTRAL</span>!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Your one-stop source for the latest news, rumors, and predictions.
          </p>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            View All Sports Articles
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
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
