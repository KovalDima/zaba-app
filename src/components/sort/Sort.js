import { useSelector, useDispatch } from "react-redux";
import { selectFilter, setSortData } from "../../store/slices/filterSlice";
import { useEffect, useRef, useState } from "react";
import "./sort.scss";

/* export const sortItems = [
  ["By Most Popular", "rating"],
  ["By Name", "name"],
  ["From Cheap", "price&order=asc"],
  ["From Expensive", "price&order=desc"],
]; */

const Sort = () => {
  const {
    sortItems,
    sortData: [sortName],
  } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef();

  useEffect(() => {
    window.addEventListener("click", closeSortList);
    return () => window.removeEventListener("click", closeSortList);
  }, []);

  const closeSortList = (e) => {
    if (e.target !== sortRef.current) {
      setIsOpen(false);
    }
  };

  const onSort = (e) => {
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={`sort ${isOpen ? "active" : ""}`}>
      <p ref={sortRef} className="sort__current" onClick={onSort}>
        <span>Sort: {sortName}</span>
      </p>
      <ul className="sort__list">
        {sortItems.map((sortItem) => (
          <li
            className={`sort__item ${sortName === sortItem[0] ? "active" : ""}`}
            key={sortItem[0]}
            onClick={() => dispatch(setSortData({ sortItem }))}
          >
            {sortItem[0]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
