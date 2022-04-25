import "./PuzzleBall.css";

const PuzzleBall = ({ value, color, filled, row, index, board }) => {
  const revealCoordinates = (row, idx) => {
    console.log(board[row][idx]);
  };

  if (filled) {
    return (
      <div
        className="PuzzleBall"
        row-idx={row}
        ball-idx={index}
        style={{ backgroundColor: `${color}` }}
      >
        {value}
      </div>
    );
  } else {
    return (
      <div
        className="PuzzleBall-empty"
        onDragOver={() => revealCoordinates(row, index)}
      ></div>
    );
  }
};

export default PuzzleBall;
