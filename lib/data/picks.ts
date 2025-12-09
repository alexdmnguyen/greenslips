export interface Pick {
  id: string;
  sport: string;
  match: string;
  teams: {
    home: string;
    away: string;
  };
  odds: {
    home: string;
    away: string;
  };
  pick: string;
  confidence: 'Low' | 'Medium' | 'High';
  writeup: string;
  date: string;
}

export const picks: Pick[] = [
  {
    id: '1',
    sport: 'Baseball',
    match: 'Yankees vs Red Sox',
    teams: {
      home: 'New York Yankees',
      away: 'Boston Red Sox'
    },
    odds: {
      home: '-150',
      away: '+130'
    },
    pick: 'Yankees ML',
    confidence: 'High',
    writeup: 'The Yankees have been dominant at home this season, boasting a 45-20 record at Yankee Stadium. Their ace is on the mound tonight facing a Red Sox lineup that struggles against fastball-heavy pitchers. With the bullpen fresh and the offense clicking, this is a strong play.',
    date: '2024-01-15'
  },
  {
    id: '2',
    sport: 'Basketball',
    match: 'Lakers vs Warriors',
    teams: {
      home: 'Los Angeles Lakers',
      away: 'Golden State Warriors'
    },
    odds: {
      home: '-110',
      away: '-110'
    },
    pick: 'Over 225.5',
    confidence: 'Medium',
    writeup: 'Both teams rank in the top 10 for offensive rating this season. The pace of play should be up-tempo, and both teams have questionable defensive metrics. Look for this game to go over the total.',
    date: '2024-01-15'
  },
  {
    id: '3',
    sport: 'VALORANT',
    match: 'Sentinels vs Cloud9',
    teams: {
      home: 'Sentinels',
      away: 'Cloud9'
    },
    odds: {
      home: '-200',
      away: '+165'
    },
    pick: 'Sentinels -1.5 Maps',
    confidence: 'High',
    writeup: 'Sentinels have looked unstoppable in recent matches, winning their last 8 series. Their map pool is deep and Cloud9 has struggled on Pearl and Bind, which are likely to be in the pool. Sentinels should take this 2-0 or 2-1.',
    date: '2024-01-15'
  },
  {
    id: '4',
    sport: 'Tennis',
    match: 'Djokovic vs Alcaraz',
    teams: {
      home: 'Novak Djokovic',
      away: 'Carlos Alcaraz'
    },
    odds: {
      home: '-120',
      away: '+100'
    },
    pick: 'Over 3.5 Sets',
    confidence: 'Medium',
    writeup: 'These two always deliver epic battles. Their last three meetings have all gone the distance. Expect another 4 or 5 set thriller as both players are in peak form heading into this Grand Slam semifinal.',
    date: '2024-01-14'
  },
  {
    id: '5',
    sport: 'CS2',
    match: 'FaZe vs NAVI',
    teams: {
      home: 'FaZe Clan',
      away: 'Natus Vincere'
    },
    odds: {
      home: '-140',
      away: '+115'
    },
    pick: 'NAVI +1.5 Maps',
    confidence: 'High',
    writeup: 'While FaZe is favored, NAVI has the experience and tactical depth to keep this close. S1mple is playing out of his mind right now, and NAVI\'s Mirage is nearly unbeatable. Even if FaZe wins, expect it to go 3 maps.',
    date: '2024-01-14'
  },
  {
    id: '6',
    sport: 'League of Legends',
    match: 'T1 vs Gen.G',
    teams: {
      home: 'T1',
      away: 'Gen.G'
    },
    odds: {
      home: '-180',
      away: '+145'
    },
    pick: 'T1 ML',
    confidence: 'High',
    writeup: 'Faker and T1 are looking like the best team in the LCK right now. Their draft flexibility and team fighting are superior to Gen.G. With Zeus dominating the top lane and Keria making highlight plays, T1 should secure a clean 2-0 victory.',
    date: '2024-01-13'
  }
];
