export interface Sport {
  id: string;
  name: string;
  slug: string;
  category: 'sports' | 'esports';
  icon: string;
  description: string;
  image: string;
}

export const sports: Sport[] = [
  {
    id: '1',
    name: 'Baseball',
    slug: 'baseball',
    category: 'sports',
    icon: '⚾',
    description: 'Latest MLB news, scores, and analysis',
    image: 'https://images.pexels.com/photos/1308713/pexels-photo-1308713.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Basketball',
    slug: 'basketball',
    category: 'sports',
    icon: '🏀',
    description: 'NBA coverage, player stats, and game previews',
    image: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Tennis',
    slug: 'tennis',
    category: 'sports',
    icon: '🎾',
    description: 'Grand Slam updates and player rankings',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'VALORANT',
    slug: 'valorant',
    category: 'esports',
    icon: '🎮',
    description: 'VCT tournaments, team rankings, and meta analysis',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    name: 'CS2',
    slug: 'cs2',
    category: 'esports',
    icon: '🎯',
    description: 'Counter-Strike 2 competitive scene coverage',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    name: 'League of Legends',
    slug: 'league-of-legends',
    category: 'esports',
    icon: '⚔️',
    description: 'LoL esports, patch notes, and champion guides',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const getSportsBySports = () => sports.filter(s => s.category === 'sports');
export const getSportsByEsports = () => sports.filter(s => s.category === 'esports');
