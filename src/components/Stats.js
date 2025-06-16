import React, { useEffect, useState } from 'react';
import { getMatchDetails } from '../services/api';

export default function Stats({ matchId }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMatchDetails(matchId)
      .then(res => setStats(res.data.match))
      .finally(() => setLoading(false));
  }, [matchId]);

  if (loading) return <p>Loading stats…</p>;
  if (!stats)  return null;

  const { possession, goals, cards } = stats;
  return (
    <div className="stats">
      <h4>Possession</h4>
      <p>{possession.home}% – {possession.away}%</p>
      {/* expand with goals, cards, other stats */}
    </div>
  );
}
