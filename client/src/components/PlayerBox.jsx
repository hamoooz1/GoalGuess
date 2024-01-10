import React from 'react';

const PlayerBox = ({ rank, teamLogo, playerName, teamName, stats }) => (
  <div className="player-box">
    <h5>{rank}</h5>
    <img className="team-badge" src={teamLogo} srcSet={`${teamLogo}@x2.png 2x`} alt={`${teamName} Logo`} />
    <div className="player-badge">
      <h4>{playerName}</h4>
      <h5>{teamName}</h5>
    </div>
    <h3>{stats}</h3>
  </div>
);

export default PlayerBox;