import "./App.css";
import Board from "./components/Board/Board";

function App() {
  return (
    <div className="App">
      <div className="main-title">
        <h1>Tic Tac Toe!!</h1>
      </div>
      <div className="game-board">
        <Board />
      </div>
      <div className="score-summary">Score Summary</div>
    </div>
  );
}

export default App;
