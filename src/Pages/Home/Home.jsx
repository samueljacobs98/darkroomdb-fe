import { useState, useEffect } from "react";
import "./Home.scss";
import Layout from "../../Components/Layout/Layout";
import CardContainer from "../../Containers/CardContainer/CardContainer";
import Sidebar from "../../Containers/Sidebar/Sidebar";

const Home = () => {
  const [filmData, setFilmData] = useState([]);

  const getFilm = async () => {
    const url = "https://darkroomdb.nw.r.appspot.com/film";
    const response = await fetch(url);
    const responseCleaned = await response.json();
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
