import { useContext, useState } from "react";
import Row from "../Row/Row";
import "./Noodle.css";
import { v4 as uuidv4 } from "uuid";
import { rotateLeft, rotateRight } from "../helpers/rotation";
import { useDrag } from "react-dnd";
import ShapeContext from "../ShapeContext";

const Noodle = ({ value, defaultShape, color }) => {
  const [shape, setShape] = useState(defaultShape);

  const rotateNoodleLeft = () => {
    setShape(rotateLeft(shape));
  };

  const rotateNoodleRight = () => {
    setShape(rotateRight(shape));
  };

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "noodle",
      item: {
        value: value,
        shape: shape,
        color: color,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [shape]
  );

  return (
    <>
      <div className="Noodle" style={{ display: isDragging ? "none" : "flex" }}>
        <div className="Noodle-arrow" onClick={rotateNoodleLeft}>
          ↪️
        </div>
        <div className="Noodle-row-holder" ref={drag}>
          {shape.map((row) => {
            return (
              <Row key={uuidv4()} data={row} value={value} color={color} />
            );
          })}
        </div>
        <div className="Noodle-arrow" onClick={rotateNoodleRight}>
          ↩️
        </div>
      </div>
    </>
  );
};

export default Noodle;
