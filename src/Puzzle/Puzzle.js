import { useState } from "react";
import "./Puzzle.css";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import PuzzleRow from "../PuzzleRow/PuzzleRow";
import { pro } from "../kaboodles/kaboodles";
import PuzzleBall from "../PuzzleBall/PuzzleBall";

const Puzzle = () => {
  const [board, setBoard] = useState(pro);

  let row = -1;
  let index = 0;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "noodle",
    drop: (item) => addNoodleToBoard(item.value, item.shape, item.color),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addNoodleToBoard = (id, shape, color) => {
    console.log(id);
    console.log(shape);
    console.log(color);
  };

  const getCoordinates = (position) => {
    row = position.getAttribute("row");
    index = position.getAttribute("ball");
  };

  return (
    <div className="Puzzle" ref={drop}>
      {board.map((entry) => {
        row++;
        index = 0;
        return (
          <div className="Puzzle-row" key={uuidv4()}>
            {entry.map((i) => {
              index++;
              if (i !== 0) {
                return (
                  <div
                    className="Puzzle-filled"
                    onDragOver={(e) => getCoordinates(e.target)}
                    key={uuidv4()}
                    row={row}
                    ball={index}
                    style={{ backgroundColor: `${i.color}` }}
                  >
                    {i.value}
                  </div>
                );
              } else {
                return (
                  <div
                    className="Puzzle-empty"
                    key={uuidv4()}
                    onDragOver={(e) => getCoordinates(e.target)}
                  ></div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Puzzle;
