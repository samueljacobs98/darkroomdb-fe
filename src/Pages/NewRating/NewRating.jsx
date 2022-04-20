import "./NewRating.scss";
import Layout from "../../Components/Layout/Layout";
import filmData from "../../assets/mockdata/filmData";
import { useParams } from "react-router-dom";

const NewRating = () => {
  const id = Number(useParams().id);
  const data = filmData.find((film) => film.id === id);
  return (
    <Layout>
      <div className="new-rating-container">
        <form action="" className="new-rating-container__form">
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
            type="number"
            id="new-rating"
            name="new-rating"
            min="0"
            max="5"
          />
        </form>
      </div>
    </Layout>
  );
};

export default NewRating;
