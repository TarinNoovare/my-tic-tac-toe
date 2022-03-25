import "./BoardBox.css";

function BoardBox(props) {
  const boardState = props.boxState;
  const boardPosition = props.boardPosititon;

  const boardBoxClickHandler = () => {
    props.boardReceiveNumber(boardPosition, boardState);
  };

  return (
    <div
      className="board__inside-box disable-select"
      onClick={boardBoxClickHandler}
    >
      {boardState}
    </div>
  );
}

export default BoardBox;
