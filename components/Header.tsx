'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Trophy } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { sports } from '@/lib/data/sports';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const sportsNav = sports.filter((s) => s.category === 'sports');
  const esportsNav = sports.filter((s) => s.category === 'esports');

  const segments = pathname.split('/').filter(Boolean);
  const activeCategory = segments[0];
  const activeSlug = segments[1];
  const isSportsPicks = activeCategory === 'sports' && activeSlug === 'picks';
  const isEsportsPicks = activeCategory === 'esports' && activeSlug === 'picks';
  const activeSport =
    activeCategory === 'sports'
      ? sportsNav.find((s) => s.slug === activeSlug)
      : activeCategory === 'esports'
        ? esportsNav.find((s) => s.slug === activeSlug)
        : undefined;

  const centerIconLink = activeSport
    ? { name: activeSport.icon, href: `/${activeCategory}/${activeSport.slug}` }
    : null;

  const homeNav = [
    // { name: 'Home', href: '/' },
    { name: 'Sports Hub', href: '/sports' },
    { name: 'Esports Hub', href: '/esports' },
    // { name: 'All Articles', href: '/articles' },
    { name: 'Daily Picks', href: '/picks' },
    { name: 'About', href: '/about' },
  ];

  const sportsHomeNav = [
    ...sportsNav.map((sport) => ({ name: sport.name, href: `/sports/${sport.slug}` })),
    { name: 'Daily Picks', href: '/sports/picks' },
  ];

  const esportsHomeNav = [
    ...esportsNav.map((sport) => ({ name: sport.name, href: `/esports/${sport.slug}` })),
    { name: 'Daily Picks', href: '/esports/picks' },
  ];

  const sportsDetailNav = [
    // ...sportsNav.map((sport) => ({ name: sport.name, href: `/sports/${sport.slug}` })),
    ...(activeSport
      ? [
          { name: 'Predictions', href: `/sports/${activeSport.slug}/predictions` },
          { name: 'Betting', href: `/sports/${activeSport.slug}/betting` },
          { name: 'News', href: `/sports/${activeSport.slug}/news` },
        ]
      : []),
    { name: 'Daily Picks', href: '/sports/picks' },
    { name: 'Sports Home', href: '/sports' },
  ];

  const esportsDetailNav = [
    // ...esportsNav.map((sport) => ({ name: sport.name, href: `/esports/${sport.slug}` })),
    ...(activeSport
      ? [
          { name: 'Predictions', href: `/esports/${activeSport.slug}/predictions` },
          { name: 'Betting', href: `/esports/${activeSport.slug}/betting` },
          { name: 'News', href: `/esports/${activeSport.slug}/news` },
        ]
      : []),
    { name: 'Daily Picks', href: '/esports/picks' },
    { name: 'Esports Home', href: '/esports' },
  ];

  const navigation =
    activeCategory === 'sports'
      ? isSportsPicks
        ? sportsHomeNav
        : segments.length > 1
          ? sportsDetailNav
          : sportsHomeNav
      : activeCategory === 'esports'
        ? isEsportsPicks
          ? esportsHomeNav
          : segments.length > 1
            ? esportsDetailNav
            : esportsHomeNav
        : homeNav;

  const mobileNavigation = centerIconLink ? [...navigation, centerIconLink] : navigation;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">
                SAMBO SENTRAL
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name === 'Daily Picks' ? (
                    <span className="inline-flex items-center gap-1 animate-pulse text-amber-300">
                      <span role="img" aria-label="money">💰</span>
                      <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                        {item.name}
                      </span>
                    </span>
                  ) : (
                    item.name
                  )}
                </Link>
              ))}
            </div>
          </div>

          {centerIconLink && (
            <Link
              href={centerIconLink.href}
              className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center text-2xl leading-none hover:scale-110 transition-transform text-white z-20"
            >
              {centerIconLink.name}
            </Link>
          )}

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {mobileNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name === 'Daily Picks' ? (
                  <span className="inline-flex items-center gap-2 text-amber-300">
                    <span role="img" aria-label="money">💰</span>
                    {item.name}
                  </span>
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
