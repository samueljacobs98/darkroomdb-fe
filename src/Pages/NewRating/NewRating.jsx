import "./NewRating.scss";
import Layout from "../../Components/Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRequest, postRequest } from "../../assets/utils/fetchUtils";
import LoaderModal from "../../Components/LoaderModal/LoaderModal";

const NewRating = () => {
  const [posted, setPosted] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [film, setFilm] = useState("");

  const id = Number(useParams().id);

  const getFilm = async (id) => {
    const responseCleaned = await getRequest(`film/${id}`);
    setFilm(responseCleaned);
  };

  useEffect(() => {
    getFilm(id);
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRating = event.target.newRating.value;
    postRequest(`film/${id}`, newRating);
    setPosted(true);
  };

  useEffect(() => {
    if (film) setShowLoader(false);
  }, [film]);

  return (
    <Layout>
      {showLoader && <LoaderModal />}
      <div className="new-rating-container">
        {posted ? (
          <div className="new-rating-container__submitted">
            <h2>Thanks for submitting!</h2>
            <Link className="new-rating-container__submitted-link" to="/">
              Click to Continue
            </Link>
          </div>
        ) : (
          <form
            action=""
            className="new-rating-container__form"
            onSubmit={handleSubmit}
          >
            <label
              className="new-rating-container__form-label"
              htmlFor="new-rating"
            >
              Add a new rating for:
              <br />
              <span className="new-rating-container__form-label-span">
                {film.name}
              </span>
            </label>
            <input
              className="new-rating-container__form-input"
              type="number"
              id="new-rating"
              name="newRating"
              step="0.5"
              min="0"
              max="5"
              required
            />
            <button type="submit" className="new-rating-container__form-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default NewRating;
