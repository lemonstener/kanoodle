import "./Ball.css";

const Ball = ({ value, color, filled }) => {
  if (filled) {
    return (
      <div className="Ball" style={{ backgroundColor: `${color}` }}>
        {value}
      </div>
    );
  } else {
    return <div className="Ball-empty"></div>;
  }
};

export default Ball;
