import { Trophy, Target, Users, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - SAMBO SENTRAL',
  description: 'Learn more about SAMBO SENTRAL, your trusted source for sports and esports news, analysis, and predictions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Trophy className="h-20 w-20 text-blue-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About SAMBO SENTRAL
          </h1>
          <p className="text-xl text-gray-400">
            Your one-stop source for sports and esports excellence
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SAMBO SENTRAL was founded with a simple mission: to provide fans with the most comprehensive, accurate, and entertaining coverage of both traditional sports and esports. We recognized a gap in the market for a platform that treated esports with the same level of professionalism and depth as traditional sports.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we've grown into a trusted source for millions of fans worldwide who rely on us for breaking news, expert analysis, and data-driven predictions across multiple sports and gaming titles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
              <Target className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-gray-400 text-sm">
                To deliver accurate, timely, and insightful coverage that empowers fans to engage more deeply with the sports and games they love.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Team</h3>
              <p className="text-gray-400 text-sm">
                A diverse group of journalists, analysts, and former athletes and players who bring real expertise to every article.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
              <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Values</h3>
              <p className="text-gray-400 text-sm">
                Integrity, accuracy, and passion drive everything we do. We never compromise on quality or objectivity.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">What We Cover</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Traditional Sports</h3>
                <p>
                  From baseball's spring training to the World Series, from NBA preseason to the Finals, and from Grand Slam opens to championship matches in tennis—we cover it all with depth and insight.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Esports</h3>
                <p>
                  VALORANT Champions Tour, CS2 Major tournaments, League of Legends World Championships, and everything in between. We treat esports with the same rigor and professionalism as traditional sports.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Predictions & Picks</h3>
                <p>
                  Our expert analysts use advanced statistics, historical data, and deep game knowledge to provide thoughtful predictions and picks for entertainment purposes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-600/30 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-300 mb-6">
            Be part of the SAMBO SENTRAL family and never miss a moment of the action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Follow on Twitter
            </a>
            <a
              href="#"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
