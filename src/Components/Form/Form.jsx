import "./Form.scss";

const Form = () => {
  return (
    <form className="form">
      <label htmlFor="filmName">Film Name*</label>
      <input type="text" id="filmName" name="filmName" required />
      <label htmlFor="rating">Rating</label>
      <input type="number" id="rating" name="rating" min="0" max="5" />
      <label htmlFor="information">Information*</label>
      <textarea id="information" name="information" rows="4" required />
      <label htmlFor="price">Price (£) per role*</label>
      <input
        type="number"
        step="0.10"
        placeholder="0.00"
        id="price"
        name="price"
        required
      />
      <label htmlFor="formats">
        Available Formats*
        <br />
        (separate by commas)
      </label>
      <input type="text" id="formats" name="formats" required />
      <label htmlFor="formats">Style*</label>
      <select type="text" id="formats" name="formats" required>
        <option value="black and white">Black and white</option>
        <option value="black and white">Colour</option>
        <option value="black and white">Sepia</option>
      </select>
      <button type="submit">Submit</button>
      <p>* required</p>
    </form>
  );
};

export default Form;

// Name
// Rating
// Info
// Price
// Available Formats
// Style -> dropdown
