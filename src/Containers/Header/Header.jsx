import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <h1>DarkRoomdb</h1>
      </Link>
      <Link className="header__add" to="/film/new">
        Add a film stock
      </Link>
    </div>
  );
};

export default Header;
