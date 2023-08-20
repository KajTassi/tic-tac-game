import { useState } from "react";
import Board from "../components/Board";
import Scores from "../components/Scores";
import About from "./About";
import "./Styling.css";

function Game() {
  
  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    tie: 0,
  });

  return (
    <div className="Game">
      <Scores scores={scores}/>
      <Board setScores={setScores}/>
      <About />
    </div>
  );
}

export default Game;
