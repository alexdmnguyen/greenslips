export interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'sports' | 'esports';
  sport: string;
  categories: string[];
  publishedAt: string;
  excerpt: string;
  image: string;
  content: string;
  author: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Yankees Sign Star Pitcher in Record-Breaking Deal',
    slug: 'yankees-sign-star-pitcher-record-deal',
    category: 'sports',
    sport: 'Baseball',
    categories: ['sports', 'baseball', 'baseball-news'],
    publishedAt: '2024-01-15',
    excerpt: 'The New York Yankees have made a splash in free agency, securing one of the top pitchers in baseball with a historic contract.',
    image: 'https://images.pexels.com/photos/1308713/pexels-photo-1308713.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'John Smith'
  },
  {
    id: '2',
    title: 'Lakers Dominate in Western Conference Showdown',
    slug: 'lakers-dominate-western-conference',
    category: 'sports',
    sport: 'Basketball',
    categories: ['sports', 'basketball', 'basketball-news'],
    publishedAt: '2024-01-14',
    excerpt: 'The Lakers put on a clinic against their division rivals, securing a commanding victory in a crucial playoff race matchup.',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Sarah Johnson'
  },
  {
    id: '3',
    title: 'Djokovic Returns to Grand Slam Glory',
    slug: 'djokovic-returns-grand-slam-glory',
    category: 'sports',
    sport: 'Tennis',
    categories: ['sports', 'tennis', 'tennis-news'],
    publishedAt: '2024-01-13',
    excerpt: 'The Serbian superstar proves he still has what it takes, claiming his latest Grand Slam title in dominant fashion.',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Mike Davis'
  },
  {
    id: '4',
    title: 'Sentinels Shock the World at VCT Masters',
    slug: 'sentinels-shock-vct-masters',
    category: 'esports',
    sport: 'VALORANT',
    categories: ['esports', 'valorant', 'valorant-news'],
    publishedAt: '2024-01-12',
    excerpt: 'In an unexpected turn of events, Sentinels have claimed the championship title at VCT Masters with a stunning performance.',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Alex Chen'
  },
  {
    id: '5',
    title: 'CS2: New Meta Emerges in Professional Play',
    slug: 'cs2-new-meta-professional-play',
    category: 'esports',
    sport: 'CS2',
    categories: ['esports', 'cs2', 'cs2-news'],
    publishedAt: '2024-01-11',
    excerpt: 'Professional teams are adapting to the latest update with innovative strategies that are changing the competitive landscape.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Ryan Lee'
  },
  {
    id: '6',
    title: 'League of Legends Worlds 2024: Preview and Predictions',
    slug: 'lol-worlds-2024-preview',
    category: 'esports',
    sport: 'League of Legends',
    categories: ['esports', 'league-of-legends', 'league-of-legends-news'],
    publishedAt: '2024-01-10',
    excerpt: 'As the biggest event in esports approaches, we break down the top contenders and dark horses for this year\'s championship.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Emily Wang'
  },
  {
    id: '7',
    title: 'MLB Trade Deadline: Winners and Losers',
    slug: 'mlb-trade-deadline-winners-losers',
    category: 'sports',
    sport: 'Baseball',
    categories: ['sports', 'baseball', 'baseball-news'],
    publishedAt: '2024-01-09',
    excerpt: 'We analyze the biggest moves at this year\'s trade deadline and predict how they\'ll impact the playoff race.',
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Tom Bradley'
  },
  {
    id: '8',
    title: 'NBA Draft Prospects: Top 10 Players to Watch',
    slug: 'nba-draft-top-10-prospects',
    category: 'sports',
    sport: 'Basketball',
    categories: ['sports', 'basketball', 'basketball-news'],
    publishedAt: '2024-01-08',
    excerpt: 'Our scouting report on the most talented young players who could be franchise cornerstones.',
    image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'David Martinez'
  },
  {
    id: '9',
    title: 'Alcaraz vs Sinner: Australian Open Predictions',
    slug: 'alcaraz-vs-sinner-australian-open-predictions',
    category: 'sports',
    sport: 'Tennis',
    categories: ['sports', 'tennis', 'tennis-predictions'],
    publishedAt: '2024-01-07',
    excerpt: 'Breaking down the semifinal clash between Carlos Alcaraz and Jannik Sinner with matchup edges and projected sets.',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Priya Nair'
  },
  {
    id: '10',
    title: 'NL Aces: Weekend Rotation Predictions',
    slug: 'nl-aces-weekend-rotation-predictions',
    category: 'sports',
    sport: 'Baseball',
    categories: ['sports', 'baseball', 'baseball-predictions'],
    publishedAt: '2024-01-06',
    excerpt: 'Projecting how top National League rotations line up and where the matchup edges lie.',
    image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Jamie Cole'
  },
  {
    id: '11',
    title: 'Baseball Betting Board: Value Dogs to Watch',
    slug: 'baseball-betting-board-value-dogs',
    category: 'sports',
    sport: 'Baseball',
    categories: ['sports', 'baseball', 'baseball-betting'],
    publishedAt: '2024-01-05',
    excerpt: 'Finding live underdogs on a packed Saturday slate with bullpen advantages.',
    image: 'https://images.pexels.com/photos/1308713/pexels-photo-1308713.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Taylor Brooks'
  },
  {
    id: '12',
    title: 'Pick-and-Roll Reads: Sunday Predictions',
    slug: 'pick-and-roll-reads-sunday-predictions',
    category: 'sports',
    sport: 'Basketball',
    categories: ['sports', 'basketball', 'basketball-predictions'],
    publishedAt: '2024-01-04',
    excerpt: 'Model projections for three marquee NBA matchups and pace-adjusted totals.',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Casey Lin'
  },
  {
    id: '13',
    title: 'Basketball Betting Angles: Totals to Target',
    slug: 'basketball-betting-angles-totals',
    category: 'sports',
    sport: 'Basketball',
    categories: ['sports', 'basketball', 'basketball-betting'],
    publishedAt: '2024-01-03',
    excerpt: 'Examining pace, rest, and injury spots to identify totals with value.',
    image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Jordan Mills'
  },
  {
    id: '14',
    title: 'Tennis Betting Notes: Serve Plus-One Spots',
    slug: 'tennis-betting-notes-serve-plus-one',
    category: 'sports',
    sport: 'Tennis',
    categories: ['sports', 'tennis', 'tennis-betting'],
    publishedAt: '2024-01-02',
    excerpt: 'Where aggressive first-strike players can cover spreads on quick courts.',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Riley Morgan'
  },
  {
    id: '15',
    title: 'VALORANT Predictions: Masters Group Stage',
    slug: 'valorant-predictions-masters-groups',
    category: 'esports',
    sport: 'VALORANT',
    categories: ['esports', 'valorant', 'valorant-predictions'],
    publishedAt: '2024-01-01',
    excerpt: 'Which comps and map pools project best in the opening round-robin.',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Alex Chen'
  },
  {
    id: '16',
    title: 'VALORANT Betting Board: Underdogs with Upset Equity',
    slug: 'valorant-betting-underdogs-upset-equity',
    category: 'esports',
    sport: 'VALORANT',
    categories: ['esports', 'valorant', 'valorant-betting'],
    publishedAt: '2023-12-31',
    excerpt: 'Examining eco conversion rates and pistol win rates to find value sides.',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Samir Patel'
  },
  {
    id: '17',
    title: 'CS2 Predictions: Katowice Playoffs',
    slug: 'cs2-predictions-katowice-playoffs',
    category: 'esports',
    sport: 'CS2',
    categories: ['esports', 'cs2', 'cs2-predictions'],
    publishedAt: '2023-12-30',
    excerpt: 'Map veto paths and rating trends to project semifinal outcomes.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Ryan Lee'
  },
  {
    id: '18',
    title: 'CS2 Betting Notes: Spray Transfer Specials',
    slug: 'cs2-betting-notes-spray-transfer',
    category: 'esports',
    sport: 'CS2',
    categories: ['esports', 'cs2', 'cs2-betting'],
    publishedAt: '2023-12-29',
    excerpt: 'Identifying teams with late-round conversion edges for series handicaps.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Morgan Blake'
  },
  {
    id: '19',
    title: 'Worlds Scrims: League Predictions Heat Check',
    slug: 'worlds-scrims-league-predictions',
    category: 'esports',
    sport: 'League of Legends',
    categories: ['esports', 'league-of-legends', 'league-of-legends-predictions'],
    publishedAt: '2023-12-28',
    excerpt: 'Who is peaking in scrims and how that shapes bracket expectations.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Emily Wang'
  },
  {
    id: '20',
    title: 'League Betting Sheet: Objective Timers and Totals',
    slug: 'league-betting-objective-timers',
    category: 'esports',
    sport: 'League of Legends',
    categories: ['esports', 'league-of-legends', 'league-of-legends-betting'],
    publishedAt: '2023-12-27',
    excerpt: 'Looking at dragon stacking and turret tempo to price kill and time props.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'Mina Cho'
  }
];
