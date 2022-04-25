import { useState } from "react";
import "./Puzzle.css";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import PuzzleRow from "../PuzzleRow/PuzzleRow";
import { pro } from "../kaboodles/kaboodles";

const Puzzle = () => {
  const [board, setBoard] = useState(pro);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "noodle",
    drop: (item) => addNoodleToBoard(item.id, item.noodleShape),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addNoodleToBoard = (id, shape) => {
    console.log(id);
    console.log(shape);
  };

  let row = -1;

  return (
    <div className="Puzzle" ref={drop}>
      {board.map((entry) => {
        row++;
        return (
          <PuzzleRow key={uuidv4()} data={entry} row={row} board={board} />
        );
      })}
    </div>
  );
};

export default Puzzle;
