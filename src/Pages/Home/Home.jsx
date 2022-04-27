import { useState, useEffect, useRef, useCallback } from "react";
import "./Home.scss";
import Layout from "../../Components/Layout/Layout";
import CardContainer from "../../Containers/CardContainer/CardContainer";
import Sidebar from "../../Containers/Sidebar/Sidebar";
import { getRequest } from "../../assets/utils/fetchUtils";
import { checkObjectForTrue } from "../../assets/utils/utils";
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

  const basicFilter = (event, filter) => {
    const filterToUpdate = event.target.value;
    filters[filter][filterToUpdate] = !filters[filter][filterToUpdate];
    setFilters({ ...filters });
  };

  const getFilm = async () => {
    const responseCleaned = await getRequest("film");
    dataStore.current = responseCleaned;
    setFilmData(responseCleaned);
  };

  const checkForActiveFilters = useCallback(() => {
    const { film, format, iso } = filters;
    const filmFilters = checkObjectForTrue(film);
    const formatFilters = checkObjectForTrue(format);
    const isoFilters = checkObjectForTrue(iso);
    if (filmFilters || formatFilters || isoFilters) {
      return true;
    }
    return false;
  }, [filters]);

  const filterByStyle = (filters, data) => {
    const activeFilmTypes = Object.keys(filters.film).filter(
      (filter) => filters.film[filter]
    );
    const filmToShow = data.filter((film) =>
      activeFilmTypes.includes(film.style)
    );
    return filmToShow;
  };

  function filterByFormat(filters, data) {
    const formats = Object.keys(filters.format).filter(
      (keys) => filters.format[keys]
    );

    return data.filter((film) => {
      const filmFormats = film.formats.map((format) => format.format);
      let shouldReturn = false;
      filmFormats.forEach((filmFormat) => {
        if (formats.includes(filmFormat)) {
          shouldReturn = true;
        }
      });
      return shouldReturn;
    });
  }

  const filterByISO = (filters, data) => {
    const isoTypes = Object.keys(filters.iso).filter(
      (keys) => filters.iso[keys]
    );
    return data.filter((film) => isoTypes.includes(film.iso.toString()));
  };

  useEffect(() => {
    getFilm();
  }, []);

  useEffect(() => {
    if (filmData.length) setShowLoader(false);
  }, [filmData]);

  const updateFilm = useCallback(
    (updatedFilters) => {
      if (!checkForActiveFilters()) {
        dataStore.current ? setFilmData(dataStore.current) : setFilmData([]);
        return;
      }
      let currentData = [...dataStore.current];
      if (checkObjectForTrue(filters.film)) {
        currentData = [...filterByStyle(filters, currentData)];
      }
      if (checkObjectForTrue(filters.format)) {
        currentData = [...filterByFormat(filters, currentData)];
      }
      if (checkObjectForTrue(filters.iso)) {
        currentData = [...filterByISO(filters, currentData)];
      }
      setFilmData(currentData);
    },
    [checkForActiveFilters, filters]
  );

  useEffect(() => {
    updateFilm(filters);
  }, [filters, updateFilm]);

  return (
    <Layout>
      <div className="home-container">
        {showLoader && <LoaderModal />}
        <Sidebar basicFilter={basicFilter} />
        <CardContainer filmData={filmData} />
      </div>
    </Layout>
  );
};

export default Home;
