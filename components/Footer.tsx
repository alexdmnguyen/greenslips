import Link from 'next/link';
import { Trophy, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">
                SAMBO SENTRAL
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Your one-stop source for the latest news, rumors, and predictions in sports and esports.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Sports</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sports/baseball" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Baseball
                </Link>
              </li>
              <li>
                <Link href="/sports/basketball" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Basketball
                </Link>
              </li>
              <li>
                <Link href="/sports/tennis" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Tennis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Esports</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/esports/valorant" className="text-gray-400 hover:text-white text-sm transition-colors">
                  VALORANT
                </Link>
              </li>
              <li>
                <Link href="/esports/cs2" className="text-gray-400 hover:text-white text-sm transition-colors">
                  CS2
                </Link>
              </li>
              <li>
                <Link href="/esports/league-of-legends" className="text-gray-400 hover:text-white text-sm transition-colors">
                  League of Legends
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-gray-400 text-sm text-center">
            &copy; 2024 SAMBO SENTRAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
