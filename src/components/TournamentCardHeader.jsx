import { Trophy, Users } from "lucide-react";

export function TournamentCardHeader({ playersCount, canStart }) {
  return (
    <div className="text-center p-4 border-b">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h2 className="text-2xl font-bold">Tournament Setup</h2>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Users className="h-4 w-4 text-gray-600" />
        <span className="text-sm text-gray-700">
          {playersCount} player{playersCount !== 1 ? "s" : ""} added
        </span>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded ${
            canStart ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          {canStart ? "Ready!" : `Need ${4 - playersCount} more`}
        </span>
      </div>
    </div>
  );
}
