import React from 'react';

export default function MatchCard({ match }) {
  const { homeTeam, awayTeam, score, utcDate, status } = match;
  return (
    <div className="match-card">
      <h3>{homeTeam.name} vs {awayTeam.name}</h3>
      <p>{new Date(utcDate).toLocaleString()}</p>
      {status === 'LIVE'
        ? <strong>{score.fullTime.home} – {score.fullTime.away}</strong>
        : <span>Kick-off: {status}</span>
      }
    </div>
  );
}
