import errorIcon from "../../assets/icons/error-page.svg";
import "./not-found.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found__img" src={errorIcon} alt="404" />
      <p className="not-found__text">This page doesn't exist</p>
    </div>
  );
};

export default NotFound;
