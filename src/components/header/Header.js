import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cartSlice";
import "./header.scss";

const Header = () => {
  const { totalPrice, totalCount } = useSelector(selectCart);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Search />
        <Link
          to="/cart"
          className={`header__cart ${totalCount ? "filled" : ""}`}
          title="Cart"
        >
          {totalCount ? (
            <span>
              {totalCount} | {totalPrice}$
            </span>
          ) : null}
        </Link>
      </div>
    </header>
  );
};

export default Header;
