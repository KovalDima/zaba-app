import { useDispatch } from "react-redux";
import { changeItemCount } from "../../store/slices/cartSlice";
import "./cart-item.scss";

const CartItem = ({ id, name, price, image, size, color, count }) => {
  const dispatch = useDispatch();

  const onChangeItemCount = (count = 0, price = 0) => {
    dispatch(changeItemCount({ item: { id, count, price } }));
  };

  return (
    <li className="cart__item" id={id}>
      <div className="cart__item-inner">
        <img
          src={image}
          alt={`${name} ${color} ${size}`}
          className="cart__item-img"
        />
        <div className="cart__item-info">
          <h3 className="cart__item-name">{name}</h3>
          <div className="cart__item-quantity">
            <button
              onClick={() => onChangeItemCount(-1, -price)}
              className="cart__item-minus"
              title="Decrease product"
            ></button>
            <span>{count}</span>
            <button
              onClick={() => onChangeItemCount(1, price)}
              className="cart__item-plus"
              title="Increase product"
            ></button>
          </div>
        </div>
      </div>
      <div>
        <p className="price cart__item-price">${price * count}</p>
        <div className="cart__item-details">
          <button
            onClick={() => onChangeItemCount(-count, -price * count)}
            className="cart__clear"
          >
            Delete
          </button>
          <div
            className="cart__item-color"
            style={{ background: color === "white" ? "#f4f4f4" : color }}
          ></div>
          <span className="cart__item-size">{size}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
