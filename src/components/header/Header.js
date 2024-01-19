import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "./header.scss";
import Search from "../search/Search";

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Link to="/cart" className="header__cart"></Link>
      </div>
    </header>
  );
};

export default Header;
