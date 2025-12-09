export interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'sports' | 'esports';
  sport: string;
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
    publishedAt: '2024-01-08',
    excerpt: 'Our scouting report on the most talented young players who could be franchise cornerstones.',
    image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'Full article content here...',
    author: 'David Martinez'
  }
];
