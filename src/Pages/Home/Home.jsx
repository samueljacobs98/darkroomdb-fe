import "./Home.scss";
import Layout from "../../Components/Layout/Layout";
import CardContainer from "../../Containers/CardContainer/CardContainer";
import Sidebar from "../../Containers/Sidebar/Sidebar";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <Sidebar />
        <CardContainer />
      </div>
    </Layout>
  );
};

export default Home;
