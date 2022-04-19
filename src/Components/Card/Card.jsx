import "./Card.scss";

const Card = ({ data }) => {
  return <div className="card">{data.name}</div>;
};

export default Card;
