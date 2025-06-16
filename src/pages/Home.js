import React, { useEffect, useState } from 'react';
import { getLiveMatches } from '../services/api';
import MatchCard from '../components/MatchCard';
import './Home.css';


export default function Home() {
  const [liveMatches, setLiveMatches] = useState([]);
  const [loading, setLoading]     = useState(true);

  useEffect(() => {
    getLiveMatches()
      .then(res => setLiveMatches(res.data.matches))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading live matches…</p>;

  return (
    <div>
      <h2>Live Matches</h2>
      {liveMatches.length
        ? liveMatches.map(m => <MatchCard key={m.id} match={m} />)
        : <p>No live matches right now.</p>
      }
    </div>
  );
}
