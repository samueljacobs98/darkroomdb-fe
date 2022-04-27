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
    return (
      checkObjectForTrue(film) ||
      checkObjectForTrue(format) ||
      checkObjectForTrue(iso)
    );
  }, [filters]);

  const filterByFormat = (filters, data) => {
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
  };

  const filterByParam = (filters, data, filterParam, filterObject) => {
    const activeTypes = Object.keys(filters[filterParam]).filter(
      (filter) => filters[filterParam][filter]
    );
    return data.filter((film) =>
      activeTypes.includes(film[filterObject].toString())
    );
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
        currentData = [...filterByParam(filters, currentData, "film", "style")];
      }
      if (checkObjectForTrue(filters.format)) {
        currentData = [...filterByFormat(filters, currentData)];
      }
      if (checkObjectForTrue(filters.iso)) {
        currentData = [...filterByParam(filters, currentData, "iso", "iso")];
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
