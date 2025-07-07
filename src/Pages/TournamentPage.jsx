import React from "react";
import { useLocation } from "react-router-dom";

function TournamentPage() {
  const location = useLocation();
  const players = location?.state.players;
  console.log(players);
  return (
    <div>
      {players.map((player) => (
        <li>{player}</li>
      ))}
    </div>
  );
}

export default TournamentPage;
