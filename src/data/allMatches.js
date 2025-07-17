const allMatches = {
  radio1v2: { left: "player1", right: "player2", winner: "player12" },
  radio3v4: { left: "player3", right: "player4", winner: "player34" },
  radio5v6: { left: "player5", right: "player6", winner: "player56" },
  radio7v8: { left: "player7", right: "player8", winner: "player78" },
  radio12v34: { left: "player12", right: "player34", winner: "player1234" },
  radio56v78: {
    left: "player56",
    right: "player78",
    winner: "player5678",
  },
  radio1234v5678: {
    left: "player1234",
    right: "player5678",
    winner: "player12345678",
  },
  radio34v5: { left: "player34", right: "player5bye", winner: "player345" },
  radio34v56: { left: "player34", right: "player56", winner: "player3456" },
  radio12v345: { left: "player12", right: "player345", winner: "player12345" },
  radio12v3456: {
    left: "player12",
    right: "player3456",
    winner: "player123456",
  },
  radio56v7: { left: "player56", right: "player7bye", winner: "player567" },
  radio1234v567: {
    left: "player1234",
    right: "player567",
    winner: "player1234567",
  },
};
export default allMatches;
