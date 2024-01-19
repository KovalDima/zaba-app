import { useEffect, useState } from "react";
import ProductsItem from "../products-item/ProductsItem";
import Preloader from "../preloader/Preloader";
import { fetchData } from "../../services/zabaService";
import "./products-list.scss";

const ProductsList = ({ category, sortBy, searchValue }) => {
  const [tShirts, setTShirts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(true);
      fetchData("t-shirts", category, sortBy, searchValue)
        .then((data) => {
          setTShirts(data);
          setLoading(false);
        })
        .catch((error) => alert(error));
    }, 400);

    return () => clearTimeout(timerId);
  }, [category, sortBy, searchValue]);

  return (
    <section className="products">
      <h2 hidden>Products</h2>
      <ul
        className="products__list"
        style={{ minHeight: `${tShirts.length <= 3 ? "50vh" : ""}` }}
      >
        {loading ? (
          <Preloader />
        ) : tShirts.length ? (
          tShirts.map((item) => <ProductsItem {...item} key={item.id} />)
        ) : (
          <p className="products__not-found">Not Found</p>
        )}
      </ul>
    </section>
  );
};

export default ProductsList;
