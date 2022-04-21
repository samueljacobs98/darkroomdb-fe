import "./Form.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { postRequest } from "../../assets/utils/fetchUtils";

const Form = () => {
  const [posted, setPosted] = useState(false);

  const getNewFilm = (entry) => {
    const ratings = [];
    if (entry.rating.value) ratings.push({ rating: entry.rating.value });
    const formats = [];
    entry.formats.value
      .split(",")
      .forEach((format) => formats.push({ format: format.trim() }));
    return {
      name: entry.filmName.value,
      ratings: ratings,
      info: entry.information.value,
      iso: entry.iso.value,
      formats: formats,
      style: entry.style.value,
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newFilm = getNewFilm(event.target);
    await postRequest("film", newFilm);
    setPosted(true);
  };

  return (
    <>
      {posted ? (
        <div className="new-rating-container__submitted">
          <h2>Thanks for submitting!</h2>
          <Link className="new-rating-container__submitted-link" to="/">
            Click to Continue
          </Link>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="filmName">Film Name*</label>
          <input type="text" id="filmName" name="filmName" required />
          <label htmlFor="rating">Rating</label>
          <input type="number" id="rating" name="rating" min="0" max="5" />
          <label htmlFor="iso">ISO*</label>
          <input type="number" id="iso" name="iso" min="0" required />
          <label htmlFor="information">
            Information*
            <br />
            (max. 250 characters)
          </label>
          <textarea
            id="information"
            name="information"
            rows="4"
            maxLength="250"
            required
          />
          <label htmlFor="formats">
            Available Formats*
            <br />
            (separate by commas)
          </label>
          <input type="text" id="formats" name="formats" required />
          <label htmlFor="style">Style*</label>
          <select type="text" id="style" name="style" required>
            <option value="black and white">Black and white</option>
            <option value="colour">Colour</option>
            <option value="sepia">Sepia</option>
          </select>
          <button type="submit">Submit</button>
          <p>* required</p>
        </form>
      )}
    </>
  );
};

export default Form;
