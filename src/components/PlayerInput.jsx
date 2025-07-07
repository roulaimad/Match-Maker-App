import { useState } from "react";

export function PlayerInput({ onAdd, players }) {
  const [playerName, setPlayerName] = useState("");
  const trimmedName = playerName.trim();
  const alreadyExists = players.includes(trimmedName);

  const handleAdd = () => {
    if (!alreadyExists && trimmedName) {
      onAdd(trimmedName);
      setPlayerName("");
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAdd()}
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          disabled={!trimmedName || alreadyExists}
          className="px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Add
        </button>
      </div>
      {trimmedName && alreadyExists && (
        <p className="text-sm text-red-500">Player already added</p>
      )}
    </div>
  );
}
