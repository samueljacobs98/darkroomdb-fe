import "./Sidebar.scss";
import chevron from "../../assets/svgs/chevron.svg";
import { useState } from "react";

const Sidebar = ({ basicFilter }) => {
  const [toggles, setToggles] = useState({
    film: false,
    format: false,
    iso: false,
  });

  const handleClick = (e) => {
    const toCheck = e.target.className;
    if (toCheck.includes("film"))
      setToggles({ ...toggles, film: !toggles.film });
    if (toCheck.includes("format"))
      setToggles({ ...toggles, format: !toggles.format });
    if (toCheck.includes("iso")) setToggles({ ...toggles, iso: !toggles.iso });
  };

  return (
    <div className="sidebar">
      <div className="sidebar__option">
        <button
          className="sidebar__option-button button-film"
          onClick={handleClick}
        >
          <span className="button-film">Film</span>
          <img
            src={chevron}
            className={toggles.film ? "button-film flip" : "button-film"}
            alt="dropdown chevron"
          />
        </button>
        {toggles.film && (
          <form className="sidebar__option-dropdown">
            <input
              type="checkbox"
              id="black-and-white"
              name="black-and-white"
              value="black and white"
              onChange={(e) => {
                basicFilter(e, "film");
              }}
            />
            <label
              htmlFor="black-and-white"
              className="sidebar__option-dropdown-label"
            >
              Black and White
            </label>
            <br />
            <input
              type="checkbox"
              id="colour"
              name="colour"
              value="colour"
              onChange={(e) => {
                basicFilter(e, "film");
              }}
            />
            <label htmlFor="colour" className="sidebar__option-dropdown-label">
              Colour
            </label>
            <br />
          </form>
        )}
      </div>
      <div className="sidebar__option">
        <button
          className="sidebar__option-button button-format"
          onClick={handleClick}
        >
          <span className="button-format">Film Format</span>
          <img
            src={chevron}
            className={toggles.format ? "button-format flip" : "button-format"}
            alt="dropdown chevron"
          />
        </button>
        {toggles.format && (
          <form className="sidebar__option-dropdown">
            <input
              type="checkbox"
              id="35mm"
              name="35mm"
              value="35mm"
              onChange={(e) => {
                basicFilter(e, "format");
              }}
            />
            <label htmlFor="35mm" className="sidebar__option-dropdown-label">
              35mm
            </label>
            <br />
            <input
              type="checkbox"
              id="120"
              name="120"
              value="120"
              onChange={(e) => {
                basicFilter(e, "format");
              }}
            />
            <label htmlFor="120" className="sidebar__option-dropdown-label">
              120
            </label>
            <br />
            <input
              type="checkbox"
              id="instant"
              name="instant"
              value="instant"
              onChange={(e) => {
                basicFilter(e, "format");
              }}
            />
            <label htmlFor="instant" className="sidebar__option-dropdown-label">
              Instant
            </label>
            <br />
          </form>
        )}
      </div>
      <div className="sidebar__option">
        <button
          className="sidebar__option-button button-iso"
          onClick={handleClick}
        >
          <span className="button-iso">ISO</span>
          <img
            src={chevron}
            alt="dropdown chevron"
            className={toggles.iso ? "button-iso flip" : "button-iso"}
          />
        </button>
        {toggles.iso && (
          <form className="sidebar__option-dropdown">
            <input
              type="checkbox"
              id="100"
              name="100"
              value="100"
              onChange={(e) => {
                basicFilter(e, "iso");
              }}
            />
            <label htmlFor="100" className="sidebar__option-dropdown-label">
              100
            </label>
            <br />
            <input
              type="checkbox"
              id="200"
              name="200"
              value="200"
              onChange={(e) => {
                basicFilter(e, "iso");
              }}
            />
            <label htmlFor="200" className="sidebar__option-dropdown-label">
              200
            </label>
            <br />
            <input
              type="checkbox"
              id="400"
              name="400"
              value="400"
              onChange={(e) => {
                basicFilter(e, "iso");
              }}
            />
            <label htmlFor="400" className="sidebar__option-dropdown-label">
              400
            </label>
            <br />
            <input
              type="checkbox"
              id="800"
              name="800"
              value="800"
              onChange={(e) => {
                basicFilter(e, "iso");
              }}
            />
            <label htmlFor="800" className="sidebar__option-dropdown-label">
              800
            </label>
            <br />
            <input
              type="checkbox"
              id="1600"
              name="1600"
              value="1600"
              onChange={(e) => {
                basicFilter(e, "iso");
              }}
            />
            <label htmlFor="1600" className="sidebar__option-dropdown-label">
              1600
            </label>
            <br />
          </form>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
