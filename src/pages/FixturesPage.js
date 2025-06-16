import React, { useState, useEffect } from 'react';
import { getFixtures }             from '../services/api';
import { LEAGUES }                 from '../constants/leagues';
import MatchCard                   from '../components/MatchCard';

export default function FixturesPage() {
  const [league, setLeague]     = useState('PL');    // default to PL
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    setLoading(true);
    getFixtures(league)
      .then(res => setFixtures(res.data.matches))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [league]);

  return (
    <div>
      <h2>Upcoming Fixtures</h2>
      <label>
        Pick League:&nbsp;
        <select value={league} onChange={e => setLeague(e.target.value)}>
          {LEAGUES.map(l => (
            <option key={l.code} value={l.code}>
              {l.name}
            </option>
          ))}
        </select>
      </label>

      {loading
        ? <p>Loading fixtures…</p>
        : fixtures.map(m => <MatchCard key={m.id} match={m} />)
      }
    </div>
  );
}
