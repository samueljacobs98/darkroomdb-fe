import "./Display.scss";
import Stars from "../Stars/Stars";
import { Link } from "react-router-dom";

const Display = ({ data }) => {
  const getRating = () => {
    if (!data.ratings) return -1;
    const size = data.ratings.length;
    const sum = data.ratings
      .map((rating) => rating.rating)
      .reduce((acc, rating) => acc + rating);
    return Math.round((2 * sum) / size) / 2;
  };

  const getFormats = () => {
    if (!data.formats) return "";
    return data.formats.map((format) => format.format).join("/");
  };

  const getPageData = () => {
    return {
      formats: getFormats(),
      rating: getRating(),
      id: data.filmId,
      name: data.name,
      info: data.info,
      iso: data.iso,
      style: data.style,
    };
  };

  const pageData = getPageData();
  console.log(pageData);

  return (
    <div className="display">
      <header className="display__header">
        <h2>{pageData.name}</h2>
        <div className="display__header-rating">
          {pageData.rating !== -1 && (
            <>
              <Stars rating={pageData.rating} />
              <Link
                className="display__header-rating-link"
                to={`/film/${pageData.id}/rating`}
              >
                Add a rating
              </Link>
            </>
          )}
        </div>
      </header>
      <p className="display__info">{pageData.info}</p>
      <footer className="display__footer">
        <p>{pageData.formats}</p>
        <p>{pageData.style}</p>
      </footer>
    </div>
  );
};

export default Display;
