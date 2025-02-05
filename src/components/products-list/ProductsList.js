import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  resetProducts,
  fetchProducts,
  loadFromCache,
  selectProducts,
} from "../../store/slices/productsSlice";
import { selectFilter, setFilters } from "../../store/slices/filterSlice";
import ProductItem from "../product-item/ProductItem";
import Preloader from "../preloader/Preloader";
import Error from "../error/Error";
import { useSearchParams } from "react-router-dom";
import "./products-list.scss";

const ProductsList = () => {
  const dispatch = useDispatch();
  const loadMoreRef = useRef();
  const isMounted = useRef(false);
  const isSearchParams = useRef(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    searchValue,
    activeCategory,
    sortData,
    sortItems,
    sortData: [, sortBy],
  } = useSelector(selectFilter);

  const { items, page, isMoreItems, loading, error, cache } =
    useSelector(selectProducts);

  const cacheKey = `${activeCategory}_${sortBy}_${searchValue}`;

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    const sortData = sortItems.find((item) => item.includes(params.sortBy));
    if (Object.keys(params).length) {
      dispatch(setFilters({ ...params, sortData }));
      isSearchParams.current = true;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      setSearchParams({
        searchValue,
        activeCategory,
        sortBy,
      });
    }
    isMounted.current = true;
  }, [activeCategory, sortData, searchValue]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearchParams.current) {
      dispatch(resetProducts());
      if (cache[cacheKey]) {
        dispatch(loadFromCache({ cacheKey }));
      } else {
        dispatch(
          fetchProducts({
            category: activeCategory,
            sortBy,
            searchValue,
            page: 1,
          })
        );
      }
    }
    isSearchParams.current = false;
  }, [activeCategory, sortData, searchValue]);

  const fetchMoreItems = () => {
    dispatch(
      fetchProducts({
        page,
        category: activeCategory,
        sortBy,
        searchValue,
      })
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isMoreItems) {
        fetchMoreItems();
      }
    });

    if (observer && loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <section className="products">
      <h2 hidden>Products</h2>
      <ul
        className="products__list"
        style={{ minHeight: `${items.length <= 3 ? "50vh" : ""}` }}
      >
        {loading ? (
          <li>
            <Preloader />
          </li>
        ) : error ? (
          <li>
            <Error message={error} />
          </li>
        ) : items.length ? (
          items.map((item) => <ProductItem {...item} key={item.id} />)
        ) : (
          <li className="products__not-found">Not Found</li>
        )}
      </ul>
      {isMoreItems && (
        <p ref={loadMoreRef} className="products__more">
          Loading more...
        </p>
      )}
    </section>
  );
};

export default ProductsList;
