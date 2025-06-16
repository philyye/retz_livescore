import React, { useState, useEffect } from 'react';
import { getLeagueTable }           from '../services/api';
import { LEAGUES }                  from '../constants/leagues';
import LeagueTable                  from '../components/LeagueTable';

export default function LeagueTablePage() {
  const [league, setLeague]   = useState('PL');
  const [tableData, setTable] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getLeagueTable(league)
      .then(res => {
        // v4 returns an array of "standings" (grouped stages); usually [0].table
        setTable(res.data.standings[0].table);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [league]);

  return (
    <div>
      <h2>League Table</h2>
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
        ? <p>Loading table…</p>
        : <LeagueTable table={tableData} />
      }
    </div>
  );
}
