import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <h1>DarkRoomdb</h1>
      </Link>
    </div>
  );
};

export default Header;
