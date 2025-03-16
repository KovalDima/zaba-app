import { Link } from "react-router-dom";
import noOrders from "../../assets/icons/no-orders.svg";
import "./cart-empty.scss";

const CartEmpty = () => {
  return (
    <>
      <p className="cart-quantity">CART</p>
      <div className="empty-cart">
        <img className="empty-cart__img" src={noOrders} alt="" />
        <p className="empty-cart__text">You haven't added any clothes yet</p>
        <Link to="/" className="btn">
          back to recomendations
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
