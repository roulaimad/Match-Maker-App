import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TournamentPlayerList from "./components/TournamentPlayerList";
import TournamentSetup from "./Pages/TournamentSetup";
import TournamentPage from "./Pages/TournamentPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TournamentSetup />} />
          <Route path="/tournament" element={<TournamentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
