import React, { useEffect, useState } from 'react';
import { getFixtures } from '../services/api';
import MatchCard from './MatchCard';

export default function Fixtures({ competitionId }) {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFixtures(competitionId)
      .then(res => setFixtures(res.data.matches))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [competitionId]);

  if (loading) return <p>Loading fixtures…</p>;
  if (error)   return <p>Error loading fixtures.</p>;

  return (
    <div className="fixtures">
      {fixtures.map(m => <MatchCard key={m.id} match={m} />)}
    </div>
  );
}
