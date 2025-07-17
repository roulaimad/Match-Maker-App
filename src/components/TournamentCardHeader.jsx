import { Trophy, Users } from "lucide-react";

export function TournamentCardHeader() {
  return (
    <div className="text-center p-4 border-b">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h2 className="text-2xl font-bold">Tournament Setup</h2>
      </div>
    </div>
  );
}
