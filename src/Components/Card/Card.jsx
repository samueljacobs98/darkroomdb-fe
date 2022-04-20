import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ data }) => {
  return (
    <Link to={{ pathname: `/film/${data.id}` }}>
      <div className="card">{data.name}</div>
    </Link>
  );
};

export default Card;
