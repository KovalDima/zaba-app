import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cartSlice";
import "./header.scss";
import { useEffect, useRef } from "react";

const Header = () => {
  const { totalPrice, totalCount } = useSelector(selectCart);
  const isMounted = useRef(false);
  const notificationEl = useRef();

  useEffect(() => {
    let timeoutId;

    if (isMounted.current) {
      notificationEl.current.classList.add("visible");
      timeoutId = setTimeout(() => {
        notificationEl.current.classList.remove("visible");
      }, 1000);
    }

    isMounted.current = true;
    return () => clearTimeout(timeoutId);
  }, [totalCount]);

  return (
    <header className="header">
      <div ref={notificationEl} className="header__notification">
        <span></span>Added to cart
      </div>
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
