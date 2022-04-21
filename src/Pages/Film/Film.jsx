import { useState, useEffect } from "react";
import "./Film.scss";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import Display from "../../Components/Display/Display";
import { getRequest } from "../../assets/utils/fetchUtils";

const Film = () => {
  const [data, setData] = useState({});
  const id = Number(useParams().id);

  const getFilm = async (id) => {
    const ext = "film/" + id;
    const responseCleaned = await getRequest(ext);
    setData(responseCleaned);
  };

  useEffect(() => {
    getFilm(id);
  }, [id]);

  return (
    <Layout>
      <div className="film-container">
        <Display data={data} />
      </div>
    </Layout>
  );
};

export default Film;
