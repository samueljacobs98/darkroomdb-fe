import "./Stars.scss";
import starFull from "../../assets/svgs/stars/full.svg";
import starHalf from "../../assets/svgs/stars/half.svg";
import starEmpty from "../../assets/svgs/stars/empty.svg";

const Stars = ({ rating }) => {
  const stars = {
    full: Math.floor(rating),
    half: Math.ceil(rating) - Math.floor(rating),
    empty: 5 - Math.ceil(rating),
  };

  const getStarJSX = (i) => {
    if (i < stars.full) return <img src={starFull} alt="full rating star" />;
    if (i < stars.full + stars.half)
      return <img src={starHalf} alt="half full rating star" />;
    return <img src={starEmpty} alt="full rating star" />;
  };

  return (
    <div className="stars">
      {getStarJSX(1)}
      {getStarJSX(2)}
      {getStarJSX(3)}
      {getStarJSX(4)}
      {getStarJSX(5)}
    </div>
  );
};

export default Stars;
