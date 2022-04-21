import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ film }) => {
  return (
    <Link to={{ pathname: `/film/${film.filmId}` }}>
      <div className="card">{film.name}</div>
    </Link>
  );
};

export default Card;
