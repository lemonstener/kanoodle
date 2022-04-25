import Ball from "../Ball/Ball";
import "./Row.css";
import { v4 as uuidv4 } from "uuid";

const Row = ({ data, color, value }) => {
  return (
    <div className="Row">
      {data.map((index) => {
        return (
          <Ball
            key={uuidv4()}
            color={color}
            value={value}
            filled={index === 1 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Row;
