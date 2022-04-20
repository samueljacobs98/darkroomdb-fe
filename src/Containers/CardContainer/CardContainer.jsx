import Card from "../../Components/Card/Card";
import "./CardContainer.scss";
import filmData from "../../assets/mockdata/filmData";

const CardContainer = () => {
  const cards = filmData.map((film) => <Card key={film.id} data={film} />);
  return <div className="card-container">{cards}</div>;
};

export default CardContainer;
