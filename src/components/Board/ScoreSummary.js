import "./ScoreSummary.css";

function ScoreSummary(props) {


  return (
    <div className="score-summary">
      Score Summary
      <div className="score-summary__score-board">
        <div>
          X: <span className="score-summary__score">0</span>
        </div>
        <div>
          O: <span className="score-summary__score">0</span>
        </div>
      </div>
    </div>
  );
}

export default ScoreSummary;
