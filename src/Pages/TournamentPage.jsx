import React from "react";
import { useLocation } from "react-router-dom";
import TreeOf4 from "../assets/treeof4.svg?react";
import TreeOf5 from "../assets/treeof5.svg?react";
import TreeOf6 from "../assets/treeof6.svg?react";
import TreeOf7 from "../assets/treeof7.svg?react";
import TreeOf8 from "../assets/treeof8.svg?react";
const svgMap = {
  4: <TreeOf4 />,
  5: <TreeOf5 />,
  6: <TreeOf6 />,
  7: <TreeOf7 />,
  8: <TreeOf8 />,
};

function TournamentPage() {
  const location = useLocation();
  const players = location.state?.players || [];
  const playersCount = players.length;
  const BracketSVG = svgMap[playersCount];
  console.log(players);
  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Tournament Bracket</h1>

      {BracketSVG ? (
        <div className="w-full flex justify-center">{BracketSVG}</div>
      ) : (
        <p>No bracket defined for {playersCount} players.</p>
      )}
    </div>
  );
}

export default TournamentPage;
