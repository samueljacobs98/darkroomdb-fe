import Header from "../../Containers/Header/Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">{children}</main>
    </div>
  );
};
export default Layout;
