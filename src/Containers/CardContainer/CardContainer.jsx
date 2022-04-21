import Card from "../../Components/Card/Card";
import "./CardContainer.scss";

const CardContainer = ({ filmData }) => {
  const getCards = () => {
    return filmData.map((film) => <Card key={film.filmId} film={film} />);
  };
  return <div className="card-container">{filmData && getCards()}</div>;
};

export default CardContainer;
