import "./Film.scss";
import Layout from "../../Components/Layout/Layout";
import filmData from "../../assets/mockdata/filmData";
import { useParams } from "react-router-dom";
import Display from "../../Components/Display/Display";

const Film = () => {
  const id = Number(useParams().id);
  const data = filmData.find((film) => film.id === id);
  return (
    <Layout>
      <div className="film-container">
        <Display data={data} />
      </div>
    </Layout>
  );
};

export default Film;
