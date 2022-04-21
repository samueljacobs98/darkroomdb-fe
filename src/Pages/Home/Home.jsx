import { useState, useEffect } from "react";
import "./Home.scss";
import Layout from "../../Components/Layout/Layout";
import CardContainer from "../../Containers/CardContainer/CardContainer";
import Sidebar from "../../Containers/Sidebar/Sidebar";
import { getRequest } from "../../assets/utils/fetchUtils";
import LoaderModal from "../../Components/LoaderModal/LoaderModal";

const Home = () => {
  const [filmData, setFilmData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  const getFilm = async () => {
    const responseCleaned = await getRequest("film");
    setFilmData(responseCleaned);
  };

  useEffect(() => {
    getFilm();
  }, []);

  useEffect(() => {
    if (filmData.length) setShowLoader(false);
  }, [filmData]);

  return (
    <Layout>
      <div className="home-container">
        {showLoader && <LoaderModal />}
        <Sidebar />
        <CardContainer filmData={filmData} />
      </div>
    </Layout>
  );
};

export default Home;
