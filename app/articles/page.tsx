import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Filter } from 'lucide-react';
import { articles } from '@/lib/data/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Articles - SAMBO SENTRAL',
  description: 'Browse all sports and esports articles, news, and analysis from SAMBO SENTRAL.',
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            All Articles
          </h1>
          <p className="text-gray-400 text-lg">
            Browse our complete collection of sports and esports coverage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
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
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.sport}
                  </span>
                  <span className="bg-slate-900/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold text-sm"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
