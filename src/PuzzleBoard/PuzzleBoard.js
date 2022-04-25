import Puzzle from "../Puzzle/Puzzle";
import NoodleHolder from "../NoodleHolder/NoodleHolder";
import ShapeContext from "../ShapeContext";
import { a, b, c, d, e, f, g, h, i, j, k, l } from "../shapeData/shapeData";

const PuzzleBoard = () => {
  return (
    <div>
      <NoodleHolder noodles={[a, b, c, d, e, f, g, h, i, j, k, l]} />
      <Puzzle />
    </div>
  );
};

export default PuzzleBoard;
