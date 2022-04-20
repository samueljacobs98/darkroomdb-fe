import Card from "../../Components/Card/Card";
import "./CardContainer.scss";

const CardContainer = () => {
  const filmData = [
    { id: 1, name: "Kodak Portra 400" },
    { id: 2, name: "FujiFilm Pro 400" },
    { id: 3, name: "Kodak Portra 400" },
    { id: 4, name: "Kodak Portra 400" },
    { id: 5, name: "Kodak Portra 400" },
    { id: 6, name: "Kodak Portra 400" },
    { id: 7, name: "Kodak Portra 400" },
    { id: 8, name: "Kodak Portra 400" },
    { id: 9, name: "Kodak Portra 400" },
    { id: 10, name: "Kodak Portra 400" },
    { id: 11, name: "Kodak Portra 400" },
    { id: 12, name: "Kodak Portra 400" },
  ];
  const cards = filmData.map((film) => <Card key={film.id} data={film} />);
  return <div className="card-container">{cards}</div>;
};

export default CardContainer;
