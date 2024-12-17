import { Link } from "react-router-dom";
import "./back.scss";

const Back = () => {
  return (
    <Link className="back-link" to="/">
      Back
    </Link>
  );
};

export default Back;
