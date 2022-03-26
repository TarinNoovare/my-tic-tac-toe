import "./Board.css";
import BoardBox from "./BoardBox";
import { useState } from "react";
import { checkStateWinning } from "../Utilities/utilities";

function Board(props) {
  // TODO: Resize board to be more playable on mobile

  const positionBoardList = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const gameSignList = ["X", "O"];

  const [currentBoardState, setCurrentBoardState] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [startingPlayer, setStartingPlayer] = useState(0);
  const [winner, setWinner] = useState(0);

  const onBoardClickHandler = (numberOfBoard, stateOfBoard) => {
    const boardPosition = numberOfBoard;

    if (stateOfBoard === "" && !checkStateWinning(currentBoardState)) {
      setCurrentBoardState((prevBoardState) => {
        return {
          ...prevBoardState,
          [boardPosition]: gameSignList[currentPlayer % 2],
        };
      });

      setCurrentPlayer((prevPlayer) => {
        return prevPlayer + 1;
      });
    }
  };

  const clearBoardHandler = () => {
    setCurrentBoardState((prevBoardState) => {
      return {
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
      };
    });

    setCurrentPlayer(0);
    setStartingPlayer(0);
  };

  const nextRoundHandler = () => {
    setCurrentBoardState((prevBoardState) => {
      return {
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
      };
    });

    setCurrentPlayer(startingPlayer + 1);
    setStartingPlayer(startingPlayer + 1);
  };

  const ticTacToeComponents = [];
  positionBoardList.forEach((em) => {
    ticTacToeComponents.push(
      <BoardBox
        boardPosititon={em}
        boxState={currentBoardState[em]}
        boardReceiveNumber={onBoardClickHandler}
      />
    );
  });

  const gameResultDisplay = [];

  if (checkStateWinning(currentBoardState)) {
    setWinner(checkStateWinning(currentBoardState))

    gameResultDisplay.push(
      <div className="board-winner-display">
        <h2>Winner: {winner}</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="board-grids">{ticTacToeComponents}</div>
      {gameResultDisplay}
      <button onClick={nextRoundHandler}>Next Round</button>
      <button onClick={clearBoardHandler}>Clear Board</button>
    </div>
  );
}

export default Board;
