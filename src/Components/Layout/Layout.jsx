import Header from "../../Containers/Header/Header";
import Canvas from "../Canvas/Canvas";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Canvas />
      <Header />
      <main className="layout__content">{children}</main>
    </div>
  );
};
export default Layout;
