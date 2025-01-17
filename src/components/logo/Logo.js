import { Link } from "react-router-dom";
import zabaLogo from "../../assets/icons/zaba.svg";
import "./logo.scss";

const Logo = () => {
  return (
    <Link to="/zaba-app" className="logo">
      <img className="logo__img" src={zabaLogo} alt="Zaba" />
    </Link>
  );
};

export default Logo;
