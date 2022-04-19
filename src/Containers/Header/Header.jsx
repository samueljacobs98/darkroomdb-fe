import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/svgs/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Header;
