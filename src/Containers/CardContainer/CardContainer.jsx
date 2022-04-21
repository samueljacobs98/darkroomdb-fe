import Card from "../../Components/Card/Card";
import "./CardContainer.scss";
// import filmData from "../../assets/mockdata/filmData";

const CardContainer = ({ filmData }) => {
  const getCards = () => {
    return filmData.map((film) => <Card key={film.filmId} film={film} />);
  };
  return <div className="card-container">{filmData && getCards()}</div>;
  // return <div className="card-container">{cards}</div>;
};

export default CardContainer;
