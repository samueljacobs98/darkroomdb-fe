import { useState, useEffect } from "react";
import "./Film.scss";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import Display from "../../Components/Display/Display";

const Film = () => {
  const [data, setData] = useState({});
  const id = Number(useParams().id);

  const getFilm = async (id) => {
    const url = "https://darkroomdb.nw.r.appspot.com/film/" + id;
    const response = await fetch(url);
    const responseCleaned = await response.json();
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
