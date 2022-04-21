import { useState, useEffect, useRef } from "react";
import "./Home.scss";
import Layout from "../../Components/Layout/Layout";
import CardContainer from "../../Containers/CardContainer/CardContainer";
import Sidebar from "../../Containers/Sidebar/Sidebar";
import { getRequest } from "../../assets/utils/fetchUtils";
import LoaderModal from "../../Components/LoaderModal/LoaderModal";

const Home = () => {
  const dataStore = useRef();
  const [filmData, setFilmData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  const [filters, setFilters] = useState({
    film: {
      "black and white": false,
      colour: false,
    },
    format: {
      instant: false,
      "35mm": false,
      120: false,
    },
    iso: {
      100: false,
      200: false,
      400: false,
      800: false,
      1600: false,
    },
  });

  const resetFilters = () => {
    setFilmData(dataStore.current);
  };

  const filmFilter = (event) => {
    const filterToUpdate = event.target.value;
    const { film } = filters;
    film[filterToUpdate] = !film[filterToUpdate];
    setFilters({ film, ...filters });
  };

  const formatFilter = (event) => {
    const filterToUpdate = event.target.value;
    const { format } = filters;
    format[filterToUpdate] = !format[filterToUpdate];
    setFilters({ format, ...filters });
  };

  const isoFilter = (event) => {
    const filterToUpdate = event.target.value;
    const { iso } = filters;
    iso[filterToUpdate] = !iso[filterToUpdate];
    setFilters({ iso, ...filters });
  };

  const getFilm = async () => {
    const responseCleaned = await getRequest("film");
    dataStore.current = responseCleaned;
    setFilmData(responseCleaned);
  };

  const filterByStyle = (filters, data) => {
    if (!data) return [];
    const filmTypes = Object.keys(filters).filter((keys) => filters[keys]);
    return data.filter((film) => filmTypes.includes(film.style));
  };

  function filterByFormat(filters, data) {
    if (!dataStore.current) return [];
    const formats = Object.keys(filters).filter((keys) => filters[keys]);
    return data.filter((film) => {
      const filmFormats = film.formats.map((format) => format.format);
      let shouldReturn = false;
      for (const format in filmFormats) {
        if (formats.includes(filmFormats[format])) {
          shouldReturn = true;
        }
      }
      return shouldReturn;
    });
  }

  useEffect(() => {
    getFilm();
  }, []);

  useEffect(() => {
    if (filmData.length) setShowLoader(false);
  }, [filmData]);

  useEffect(() => {
    const updateFilm = (updatedFilters) => {
      let dataWithDuplicates = [];
      filterByStyle(updatedFilters.film, dataStore.current).forEach((film) =>
        dataWithDuplicates.push(film)
      );
      filterByFormat(filters.format, dataWithDuplicates).forEach((film) =>
        dataWithDuplicates.push(film)
      );
      // filterByISO(filters.iso, dataWithDuplicates).forEach((film) =>
      //   dataWithDuplicates.push(film)
      // );

      const dataWithoutDuplicates = [...new Set(dataWithDuplicates)];
      if (dataStore.current && dataWithoutDuplicates.length === 0) {
        resetFilters();
        return;
      }
      setFilmData(dataWithoutDuplicates);
    };
    updateFilm(filters);
  }, [filters]);

  return (
    <Layout>
      <div className="home-container">
        {showLoader && <LoaderModal />}
        <Sidebar
          filmFilter={filmFilter}
          formatFilter={formatFilter}
          isoFilter={isoFilter}
        />
        <CardContainer filmData={filmData} />
      </div>
    </Layout>
  );
};

export default Home;
