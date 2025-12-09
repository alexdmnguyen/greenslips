import { Trophy, TrendingUp, AlertCircle } from 'lucide-react';
import { picks } from '@/lib/data/picks';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daily Picks - SAMBO SENTRAL',
  description: 'Expert predictions and betting picks for sports and esports matches.',
};

export default function PicksPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Trophy className="h-16 w-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">
            Daily Picks
          </h1>
          <p className="text-xl text-gray-400">
            Expert predictions and analysis for today's biggest matches
          </p>
        </div>

        <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Responsible Gaming Reminder
              </h3>
              <p className="text-gray-400 text-sm">
                These picks are for entertainment purposes only. Always gamble responsibly and never bet more than you can afford to lose.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {picks.map((pick) => (
            <div
              key={pick.id}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all"
            >
              <div className="bg-slate-900/50 px-6 py-4 border-b border-slate-700">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      {pick.sport}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {pick.match}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">Confidence</div>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                        pick.confidence === 'High'
                          ? 'bg-green-600/20 text-green-400'
                          : pick.confidence === 'Medium'
                          ? 'bg-yellow-600/20 text-yellow-400'
                          : 'bg-gray-600/20 text-gray-400'
                      }`}
                    >
                      <TrendingUp className="h-4 w-4" />
                      {pick.confidence}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Home</div>
                    <div className="text-lg font-semibold text-white mb-1">
                      {pick.teams.home}
                    </div>
                    <div className="text-blue-400 font-bold">
                      {pick.odds.home}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-2">vs</div>
                      <div className="text-xs text-gray-500">
                        {new Date(pick.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Away</div>
                    <div className="text-lg font-semibold text-white mb-1">
                      {pick.teams.away}
                    </div>
                    <div className="text-blue-400 font-bold">
                      {pick.odds.away}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-white">Our Pick</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">
                    {pick.pick}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Analysis
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {pick.writeup}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
