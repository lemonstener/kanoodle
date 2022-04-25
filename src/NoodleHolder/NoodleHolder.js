import Noodle from "../Noodle/Noodle";
import "./NoodleHolder.css";
import { v4 as uuidv4 } from "uuid";

const NoodleHolder = ({ noodles }) => {
  return (
    <div className="NoodleHolder">
      {noodles.map((noodle) => {
        return (
          <Noodle
            key={uuidv4()}
            value={noodle.value}
            color={noodle.color}
            defaultShape={noodle.shape}
          />
        );
      })}
    </div>
  );
};

export default NoodleHolder;
