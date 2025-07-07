import { Trash2 } from "lucide-react";

export function PlayerList({ players, onRemove }) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900">Players</h3>
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {players.map((player, index) => (
          <div
            key={player}
            className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-sm font-medium text-blue-800">
                {index + 1}
              </div>
              <span className="font-medium text-gray-900">{player}</span>
            </div>
            <button
              onClick={() => onRemove(player)}
              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
