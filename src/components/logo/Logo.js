import { Link } from "react-router-dom";
import zabaLogo from "../../assets/icons/zaba.svg";
import "./logo.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo" title="Zaba Store">
      <img className="logo__img" src={zabaLogo} alt="Zaba" width="63px" />
    </Link>
  );
};

export default Logo;
