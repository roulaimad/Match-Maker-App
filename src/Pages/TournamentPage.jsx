import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import WinnerModal from "../components/WinnerModal";

import TreeOf4 from "../assets/treeof4.svg?react";
import TreeOf5 from "../assets/treeof5.svg?react";
import TreeOf6 from "../assets/treeof6.svg?react";
import TreeOf7 from "../assets/treeof7.svg?react";
import TreeOf8 from "../assets/treeof8.svg?react";
import allMatches from "../data/allMatches";
const svgMap = { 4: TreeOf4, 5: TreeOf5, 6: TreeOf6, 7: TreeOf7, 8: TreeOf8 };

function setTextContent(id, text) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = text;
    node.setAttribute("fill", "#ffffff");
    node.style.fill = "#ffffff";
    node.setAttribute("text-anchor", "middle");
    node.setAttribute("dominant-baseline", "middle");
  }
}

export default function TournamentPage() {
  const location = useLocation();
  const players = location.state?.players || [];
  const playersCount = players.length;
  const BracketSVG = svgMap[playersCount];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMatch, setCurrentMatch] = useState(null);
  const [selectedWinner, setSelectedWinner] = useState("");

  useEffect(() => {
    players.forEach((name, idx) => {
      const upper = name.toUpperCase();
      const id = `player${idx + 1}`;
      setTextContent(id, upper);

      if (id === "player5") {
        setTextContent("player5bye", upper);
      }
      if (id === "player7") {
        setTextContent("player7bye", upper);
      }
    });
  }, [players]);

  useEffect(() => {
    const handlers = [];
    Object.entries(allMatches).forEach(([radioId, matchInfo]) => {
      const el = document.getElementById(radioId);
      if (el) {
        el.style.cursor = "pointer";
        const handler = () => {
          setCurrentMatch(matchInfo);
          setSelectedWinner("");
          setIsModalOpen(true);
        };
        el.addEventListener("click", handler);
        handlers.push({ el, handler });
      }
    });

    return () => {
      handlers.forEach(({ el, handler }) =>
        el.removeEventListener("click", handler)
      );
    };
  }, [playersCount]);

  const handleConfirm = () => {
    if (currentMatch && selectedWinner) {
      const upper = selectedWinner.toUpperCase();
      setTextContent(currentMatch.winner, upper);
    }
    setIsModalOpen(false);
  };

  const getPlayerNamesForMatch = () => {
    if (!currentMatch) return [];
    const left = document.getElementById(currentMatch.left)?.textContent || "";
    const right =
      document.getElementById(currentMatch.right)?.textContent || "";
    return [left, right];
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center ">
      <h1 className="text-2xl font-bold mb-4 ">Tournament Bracket</h1>
      <div className="w-full flex justify-center">
        {BracketSVG ? (
          <BracketSVG style={{ height: "70vh", width: "auto" }} />
        ) : (
          <p>No bracket for {playersCount} players.</p>
        )}
      </div>
      <WinnerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        options={getPlayerNamesForMatch()}
        selectedWinner={selectedWinner}
        setSelectedWinner={setSelectedWinner}
      />
    </div>
  );
}
