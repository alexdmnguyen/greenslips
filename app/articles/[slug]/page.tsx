import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { articles } from '@/lib/data/articles';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found - SAMBO SENTRAL',
    };
  }

  return {
    title: `${article.title} - SAMBO SENTRAL`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.sport === article.sport && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Articles
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {article.sport}
              </span>
              <span className="bg-slate-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              {article.excerpt}
            </p>

            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                {article.content || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Takeaways</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-16 border-t border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/articles/${relatedArticle.slug}`}
                  className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all"
                >
                  <div className="relative h-40">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
