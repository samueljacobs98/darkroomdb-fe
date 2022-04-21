import { useState, useEffect } from "react";
import "./Film.scss";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import Display from "../../Components/Display/Display";
import { getRequest } from "../../assets/utils/fetchUtils";
import LoaderModal from "../../Components/LoaderModal/LoaderModal";

const Film = () => {
  const [data, setData] = useState({});
  const [showLoader, setShowLoader] = useState(true);
  const id = Number(useParams().id);

  const getFilm = async (id) => {
    const responseCleaned = await getRequest(`film/${id}`);
    setData(responseCleaned);
  };

  useEffect(() => {
    getFilm(id);
  }, [id]);

  useEffect(() => {
    if (Object.keys(data).length) setShowLoader(false);
  }, [data]);

  return (
    <Layout>
      {showLoader && <LoaderModal />}
      <div className="film-container">
        <Display data={data} />
      </div>
    </Layout>
  );
};

export default Film;
