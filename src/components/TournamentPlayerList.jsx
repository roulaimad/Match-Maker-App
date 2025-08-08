import { useState } from "react";
import { Users, Trophy } from "lucide-react";
import { TournamentCardHeader } from "../components/TournamentCardHeader";
import { PlayerInput } from "../components/PlayerInput";
import { PlayerList } from "../components/PlayerList";
import { Link } from "react-router-dom";
import { shuffleArray } from "../utils/shuffle";

export default function TournamentPlayerList() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (name) => {
    if (players.length >= 8) return;
    if (name && !players.includes(name)) {
      setPlayers([...players, name]);
    }
  };

  const removePlayer = (name) => {
    setPlayers(players.filter((p) => p !== name));
  };

  const canStart = players.length >= 4;

  const bracketSize = Math.pow(
    2,
    Math.ceil(Math.log2(Math.max(4, players.length)))
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <TournamentCardHeader />
        <div className="p-6 space-y-6">
          <PlayerInput onAdd={addPlayer} players={players} />
          {players.length >= 8 && (
            <p className="text-center text-red-500 text-sm">
              Maximum of 8 players reached
            </p>
          )}

          {players.length > 0 ? (
            <PlayerList players={players} onRemove={removePlayer} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p className="text-sm">No players added yet</p>
              <p className="text-xs text-gray-400 mt-1">
                Add at least 4 players to start
              </p>
            </div>
          )}

          <Link
            to="/tournament"
            state={{ players: shuffleArray(players) }}
            className={`block w-full py-2 text-center rounded text-lg font-medium ${
              canStart
                ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                : "bg-yellow-400 text-gray-500 pointer-events-none"
            }`}
          >
            <div className="flex justify-center items-center gap-2">
              <Trophy className="h-4 w-4" />
              Start Tournament
              {!canStart && ` (${4 - players.length} more needed)`}
            </div>
          </Link>

          <div className="text-center text-xs text-gray-500 space-y-1">
            <p>Minimum 4 players required, maximum 8 players allowed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
