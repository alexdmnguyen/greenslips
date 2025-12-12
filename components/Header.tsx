'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Trophy } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { sports } from '@/lib/data/sports';

type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const sportsNav = sports.filter((s) => s.category === 'sports');
  const esportsNav = sports.filter((s) => s.category === 'esports');

  const dropdownSports = sportsNav.map((sport) => ({
    name: sport.name,
    href: `/sports/${sport.slug}`,
  }));

  const dropdownEsports = esportsNav.map((sport) => ({
    name: sport.name,
    href: `/esports/${sport.slug}`,
  }));

  const segments = pathname.split('/').filter(Boolean);
  const activeCategory = segments[0];
  const activeSlug = segments[1];
  const activeSport =
    activeCategory === 'sports'
      ? sportsNav.find((s) => s.slug === activeSlug)
      : activeCategory === 'esports'
        ? esportsNav.find((s) => s.slug === activeSlug)
        : undefined;

const buildCategoryNav = (base: string, type: 'sports' | 'esports'): NavItem[] => [
  { name: 'Predictions', href: `${base}/predictions` },
  { name: 'Betting', href: `${base}/betting` },
  { name: 'News', href: `${base}/news` },
  { name: type === 'sports' ? 'Sports Hub' : 'Esports Hub', href: type === 'sports' ? '/sports' : '/esports' },
  { name: 'Daily Picks', href: type === 'sports' ? '/sports/picks' : '/esports/picks' },
];

  let navigation: NavItem[] = [
    { name: 'Sports Hub', href: '/sports', children: dropdownSports },
    { name: 'Esports Hub', href: '/esports', children: dropdownEsports },
    {
      name: 'Daily Picks',
      href: '/picks',
      children: [
        { name: 'Daily Sports Picks', href: '/sports/picks' },
        { name: 'Daily Esports Picks', href: '/esports/picks' },
      ],
    },
  ];

  if (activeCategory === 'sports') {
    if (activeSlug && activeSlug !== 'picks') {
      navigation = [...buildCategoryNav(`/sports/${activeSlug}`, 'sports')];
    } else if (activeSlug === 'picks') {
      navigation = [
        ...sportsNav.map((sport) => ({ name: sport.name, href: `/sports/${sport.slug}` })),
        { name: 'Sports Hub', href: '/sports' },
        { name: 'Daily Picks', href: '/sports/picks' },
      ];
    } else {
      navigation = [
        ...sportsNav.map((sport) => ({ name: sport.name, href: `/sports/${sport.slug}` })),
        { name: 'Sports Hub', href: '/sports' },
        { name: 'Daily Picks', href: '/sports/picks' },
      ];
    }
  } else if (activeCategory === 'esports') {
    if (activeSlug && activeSlug !== 'picks') {
      navigation = [...buildCategoryNav(`/esports/${activeSlug}`, 'esports')];
    } else if (activeSlug === 'picks') {
      navigation = [
        ...esportsNav.map((sport) => ({ name: sport.name, href: `/esports/${sport.slug}` })),
        { name: 'Esports Hub', href: '/esports' },
        { name: 'Daily Picks', href: '/esports/picks' },
      ];
    } else {
      navigation = [
        ...esportsNav.map((sport) => ({ name: sport.name, href: `/esports/${sport.slug}` })),
        { name: 'Esports Hub', href: '/esports' },
        { name: 'Daily Picks', href: '/esports/picks' },
      ];
    }
  }

  const centerIconLink = activeSport
    ? { name: activeSport.icon, href: `/${activeCategory}/${activeSport.slug}` }
    : null;

  const mobileNavigation = centerIconLink ? [...navigation, centerIconLink] : navigation;

  const activeSection = activeCategory === 'esports' ? 'esports' : activeCategory === 'sports' ? 'sports' : null;

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
            <div className="ml-10 flex items-center justify-center space-x-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-gray-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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

                  {item.children && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 top-full mt-3.5 min-w-[180px] rounded-b-lg rounded-t-none border border-t-0 border-slate-800 bg-slate-900/95 shadow-xl backdrop-blur-sm p-2 z-40">
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block text-sm text-gray-200 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name === 'Daily Picks' ? (
                    <span className="inline-flex items-center gap-2 text-amber-300">
                      <span role="img" aria-label="money">dY'ų</span>
                      {item.name}
                    </span>
                  ) : (
                    item.name
                  )}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block text-gray-400 hover:text-white hover:bg-slate-800 px-3 py-1 rounded-md text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
