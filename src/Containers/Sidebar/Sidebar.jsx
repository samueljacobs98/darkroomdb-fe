import "./Sidebar.scss";
import chevron from "../../assets/svgs/chevron.svg";
import { useState } from "react";

const Sidebar = () => {
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
              value="bnw"
            />
            <label
              htmlFor="black-and-white"
              className="sidebar__option-dropdown-label"
            >
              Black and White
            </label>
            <br />
            <input type="checkbox" id="colour" name="colour" value="colour" />
            <label htmlFor="colour" className="sidebar__option-dropdown-label">
              Colour
            </label>
            <br />
            <input
              type="checkbox"
              id="instant"
              name="instant"
              value="instant"
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
            <input type="checkbox" id="35mm" name="35mm" value="35mm" />
            <label htmlFor="35mm" className="sidebar__option-dropdown-label">
              35mm
            </label>
            <br />
            <input type="checkbox" id="120" name="120" value="120" />
            <label htmlFor="120" className="sidebar__option-dropdown-label">
              120
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
            <input type="checkbox" id="100" name="100" value="100" />
            <label htmlFor="100" className="sidebar__option-dropdown-label">
              100
            </label>
            <br />
            <input type="checkbox" id="200" name="200" value="200" />
            <label htmlFor="200" className="sidebar__option-dropdown-label">
              200
            </label>
            <br />
            <input type="checkbox" id="400" name="400" value="400" />
            <label htmlFor="400" className="sidebar__option-dropdown-label">
              400
            </label>
            <br />
            <input type="checkbox" id="800" name="800" value="800" />
            <label htmlFor="800" className="sidebar__option-dropdown-label">
              800
            </label>
            <br />
            <input
              type="checkbox"
              id="otherISO"
              name="otherISO"
              value="otherISO"
            />
            <label
              htmlFor="otherISO"
              className="sidebar__option-dropdown-label"
            >
              Other
            </label>
            <br />
          </form>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
