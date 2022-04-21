import { useState, useEffect } from "react";
import "./Home.scss";
import Layout from "../../Components/Layout/Layout";
import CardContainer from "../../Containers/CardContainer/CardContainer";
import Sidebar from "../../Containers/Sidebar/Sidebar";
import { getRequest } from "../../assets/utils/fetchUtils";

const Home = () => {
  const [filmData, setFilmData] = useState([]);

  const getFilm = async () => {
    const responseCleaned = await getRequest("film");
    setFilmData(responseCleaned);
  };

  useEffect(() => {
    getFilm();
  }, []);

  return (
    <Layout>
      <div className="home-container">
        <Sidebar />
        <CardContainer filmData={filmData} />
      </div>
    </Layout>
  );
};

export default Home;
