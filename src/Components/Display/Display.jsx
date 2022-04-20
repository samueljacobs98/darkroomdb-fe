import "./Display.scss";
import Stars from "../Stars/Stars";

const Display = ({ data }) => {
  const getRating = () => {
    if (!data.ratings) return 0;
    const size = data.ratings.length;
    const sum = data.ratings.reduce((acc, rating) => acc + rating);
    return Math.round((2 * sum) / size) / 2;
  };

  const rating = getRating();
  const formats = data.format.join("/");
  return (
    <div className="display">
      <header className="display__header">
        <h2>{data.name}</h2>
        <Stars rating={rating} />
      </header>
      <p className="display__info">{data.info}</p>
      <footer className="display__footer">
        <p>{formats}</p>
        <p>{data.style}</p>
      </footer>
    </div>
  );
};

export default Display;
