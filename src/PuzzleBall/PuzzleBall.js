import "./PuzzleBall.css";

const PuzzleBall = ({ value, color, filled, row, index, board }) => {
  const revealCoordinates = (row, idx) => {
    // function to highlight available valid space
    console.log(row, idx);
  };

  if (filled) {
    return (
      <div
        className="PuzzleBall"
        row={row}
        ball={index}
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
