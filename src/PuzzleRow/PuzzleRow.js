import PuzzleBall from "../PuzzleBall/PuzzleBall";
import { v4 as uuidv4 } from "uuid";
import "./PuzzleRow.css";

const PuzzleRow = ({ data, row, board }) => {
  let index = -1;

  return (
    <div className="PuzzleRow">
      {data.map((i) => {
        index++;
        return (
          <PuzzleBall
            board={board}
            row={row}
            index={index}
            key={uuidv4()}
            color={i.value !== 0 ? i.color : "gray"}
            value={i.value}
            filled={i !== 0 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default PuzzleRow;
