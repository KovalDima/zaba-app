import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useDispatch } from "react-redux";
import { changeItemCount } from "../../store/slices/cartSlice";
import "./product-item.scss";

const ProductItem = ({ name, price, sizes, colors, images, id }) => {
  const dispatch = useDispatch();

  const [activeSize, setActiveSize] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const currentImages = images[colors[activeColor]];

  const onAddToCart = () => {
    const item = {
      name,
      price,
      image: currentImages[0],
      size: sizes[activeSize],
      color: colors[activeColor],
      count: 1,
      id: `${id}-${colors[activeColor]}-${sizes[activeSize]}`,
    };

    dispatch(changeItemCount({ item }));
  };

  const onChangeSlide = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= currentImages.length) {
      newIndex = currentImages.length - 1;
    }
    setActiveSlide(newIndex);
  };

  const touchHandlers = useSwipeable({
    onSwipedLeft: () => onChangeSlide(activeSlide + 1),
    onSwipedRight: () => onChangeSlide(activeSlide - 1),
    preventScrollOnSwipe: true,
    trackTouch: true,
    swipeDuration: 1500,
  });

  const onSelectColor = (i) => {
    setActiveSlide(0);
    setActiveColor(i);
  };

  return (
    <li className="products-item" id={id}>
      <div className="products-item__head">
        {imgLoaded ? null : (
          <div className="products-item__img-placeholder"></div>
        )}
        <div className="products-item__slider" {...touchHandlers}>
          {currentImages.map((url, i) => (
            <img
              key={url}
              width="400px"
              className="products-item__img"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              src={url}
              alt={name}
              loading="lazy"
              onLoad={i === 0 ? () => setImgLoaded(true) : null}
            />
          ))}
          <div className="products-item__slider-pagination">
            {currentImages.map((_, i) => (
              <span
                key={i}
                className={activeSlide === i ? "active" : null}
              ></span>
            ))}
          </div>
          <button
            type="button"
            className="products-item__slider-btn products-item__slider-btn--prev"
            onClick={() => onChangeSlide(activeSlide - 1)}
          ></button>
          <button
            type="button"
            className="products-item__slider-btn products-item__slider-btn--next"
            onClick={() => onChangeSlide(activeSlide + 1)}
          ></button>
        </div>
        <div className="products-item__inner" title={name}>
          <h3 className="products-item__name">{name}</h3>
          <p className="price products-item__price">${price}</p>
        </div>
      </div>
      <div className="products-item__footer">
        <div className="products-item__inner products-item__inner--bottom">
          <ul className="products-item__list products-item__list--sizes">
            {sizes.map((item, i) => (
              <li
                onClick={() => setActiveSize(i)}
                key={item}
                className={activeSize === i ? "checked" : null}
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="products-item__list products-item__list--colors">
            {colors.map((item, i) => (
              <li
                onClick={() => onSelectColor(i)}
                key={item}
                style={{ background: item === "white" ? "#f4f4f4" : item }}
                className={activeColor === i ? "checked" : null}
              ></li>
            ))}
          </ul>
        </div>
        <button onClick={onAddToCart} className="btn btn--add-cart">
          <span></span>Add to cart
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
