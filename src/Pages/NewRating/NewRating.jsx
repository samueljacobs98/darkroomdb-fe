import "./NewRating.scss";
import Layout from "../../Components/Layout/Layout";
import filmData from "../../assets/mockdata/filmData";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const NewRating = () => {
  const [posted, setPosted] = useState(true);
  const id = Number(useParams().id);
  const data = filmData.find((film) => film.id === id);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRating = event.target.newRating.value;
    const url = "https://darkroomdb.nw.r.appspot.com/film/" + id;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newRating),
    });
    setPosted(true);
  };

  return (
    <Layout>
      <div className="new-rating-container">
        {!posted && (
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
                {data.name}
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
        {posted && (
          <div className="new-rating-container__submitted">
            <h2>Thanks for submitting!</h2>
            <Link className="new-rating-container__submitted-link" to="/">
              Click to Continue
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default NewRating;
