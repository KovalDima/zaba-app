import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/logo/Logo";
import Back from "../components/back/Back";
import noOrders from "../assets/icons/no-orders.svg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([1, 2]);
  return (
    <>
      <Logo />
      <Back />
      {cartItems.length ? (
        <div className="cart">
          <div className="cart__head">
            <p className="cart-quantity">Cart ({3})</p>
            <button className="cart__clear">Clear all</button>
          </div>
          <ul className="cart__list">
            {/* !!! */}
            <li className="cart__item">
              <div className="cart__item-inner">
                <img src="" alt="basic" className="cart__item-img" />
                <div className="cart__item-info">
                  <h3 className="cart__item-name">
                    BASIC T-SHIRT WITH A NARROW CUT
                  </h3>
                  <div className="cart__item-quantity">
                    <button className="cart__item-minus"></button>
                    <span>2</span>
                    <button className="cart__item-plus"></button>
                  </div>
                </div>
              </div>
              <div>
                <p className="price cart__item-price">$19</p>
                <div className="cart__item-details">
                  <button className="cart__clear">Delete item</button>
                  <div
                    className="cart__item-color"
                    style={{ background: "brown" }}
                  ></div>
                  <span className="cart__item-size">XS</span>
                </div>
              </div>
            </li>
            <li className="cart__item">
              <div className="cart__item-inner">
                <img src="" alt="basic" className="cart__item-img" />
                <div className="cart__item-info">
                  <h3 className="cart__item-name">
                    BASIC T-SHIRT WITH A NARROW CUT
                  </h3>
                  <div className="cart__item-quantity">
                    <button className="cart__item-minus"></button>
                    <span>2</span>
                    <button className="cart__item-plus"></button>
                  </div>
                </div>
              </div>
              <div>
                <p className="price cart__item-price">$19</p>
                <div className="cart__item-details">
                  <button className="cart__clear">Delete item</button>
                  <div
                    className="cart__item-color"
                    style={{ background: "brown" }}
                  ></div>
                  <span className="cart__item-size">XS</span>
                </div>
              </div>
            </li>
            {/* !!! */}
          </ul>
          <div className="cart__footer">
            <div className="container">
              <div className="cart__footer-wrapper">
                <p className="price cart__total">$219 TOTAL</p>
                <button className="btn">buy now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p className="cart-quantity">CART</p>
          <div className="empty-cart">
            <img className="empty-cart__img" src={noOrders} alt="" />
            <p className="empty-cart__text">
              You haven't added any clothes yet
            </p>
            <Link to="/" className="btn">
              back to recomendations
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
