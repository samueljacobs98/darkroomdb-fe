import "./LoaderModal.scss";
import loader from "../../assets/gifs/loader.gif";

const LoaderModal = () => {
  return (
    <div className="loader-modal">
      <img className="loader-modal__loader" src={loader} alt="" />
    </div>
  );
};

export default LoaderModal;
