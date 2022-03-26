import "./App.css";
import Board from "./components/Board/Board";
import ScoreSummary from "./components/Board/ScoreSummary";
import { useState } from "react";

function App() {
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  // const onWinningHandle = (winner) => {
  //   console.log(winner);
  // };

  return (
    <div className="App">
      <div className="main-title">
        <h1>Tic Tac Toe!!</h1>
      </div>
      <div className="game-board">
        <Board />
        {/* <Board winnerHandle={onWinningHandle} /> */}
      </div>
      <ScoreSummary />
    </div>
  );
}

export default App;
