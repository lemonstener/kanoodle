import { useRef, useState } from "react";
import "./Puzzle.css";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import { pro } from "../kaboodles/kaboodles";

const Puzzle = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const coordinates = useRef({ row: -1, index: 0 });

  let row = -1;
  let index = -1;

  const updateBoard = (newBoard) => {
    setBoard(newBoard);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "noodle",
    drop: (item, e) => addNoodleToBoard(item.value, item.shape, item.color),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addNoodleToBoard = (value, shape, color) => {
    row = coordinates.current.row - 1;
    index = coordinates.current.index - 1;

    const toFill = [];

    for (let i of shape) {
      row++;
      if (row > 4) {
        console.log("Row exceeded");
        return;
      }
      index = coordinates.current.index - 1;
      for (let j of i) {
        index++;
        if ((board[row][index] !== 0 && j !== 0) || index > 10) {
          console.log("Incompatible");
          return;
        } else {
          if (j !== 0) {
            toFill.push([row, index]);
          }
        }
      }
    }

    console.log("Can update");
    console.log(toFill);

    const newBoard = board;

    for (let i of toFill) {
      newBoard[i[0]][i[1]] = { value, shape, color };
    }

    setBoard(newBoard);
  };

  const getCoordinates = (position) => {
    coordinates.current.row = parseInt(position.getAttribute("row"));
    coordinates.current.index = parseInt(position.getAttribute("index"));
  };

  return (
    <div className="Puzzle" ref={drop}>
      {board.map((entry) => {
        // coordinates.current.row++;
        // coordinates.current.index = -1;
        row++;
        index = -1;
        return (
          <div className="Puzzle-row" key={uuidv4()}>
            {entry.map((i) => {
              coordinates.current.index++;
              index++;
              if (i !== 0) {
                return (
                  <div
                    className="Puzzle-filled"
                    key={uuidv4()}
                    row={row}
                    index={index}
                    style={{ backgroundColor: `${i.color}` }}
                    onDragOver={(e) => getCoordinates(e.target)}
                  >
                    {i.value}
                  </div>
                );
              } else {
                return (
                  <div
                    className="Puzzle-empty"
                    key={uuidv4()}
                    row={row}
                    index={index}
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
