import "./preloader.scss";

const Preloader = ({ global = false }) => {
  return <div className={`preloader ${global ? "global" : ""}`}></div>;
};

export default Preloader;
