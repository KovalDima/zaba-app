import { useSelector, useDispatch } from "react-redux";
import { selectCart, clearItems } from "../store/slices/cartSlice";
import CartItem from "../components/cart-item/CartItem";
import CartEmpty from "../components/cart-empty/CartEmpty";
import Logo from "../components/logo/Logo";
import Back from "../components/back/Back";

const Cart = () => {
  const dispatch = useDispatch();

  const { items, totalPrice, totalCount } = useSelector(selectCart);
  const itemsArr = Object.values(items);

  return (
    <>
      <Logo />
      <Back />
      {totalCount ? (
        <div className="cart">
          <div className="cart__head">
            <p className="cart-quantity">Cart ({totalCount})</p>
            <button
              onClick={() => dispatch(clearItems())}
              className="cart__clear"
            >
              Clear all
            </button>
          </div>
          <ul className="cart__list">
            {itemsArr.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </ul>
          <div className="cart__footer">
            <div className="container">
              <div className="cart__footer-wrapper">
                <p className="price cart__total">${totalPrice} TOTAL</p>
                <button className="btn">buy now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default Cart;
