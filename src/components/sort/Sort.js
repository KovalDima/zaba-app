import { useEffect, useState } from "react";
import "./sort.scss";
import { useRef } from "react";

const Sort = ({ currentSort, onSortProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortItemsRef = useRef([
    ["By Most Popular", "rating"],
    ["By Name", "name"],
    ["From Cheap", "price&order=asc"],
    ["From Expensive", "price&order=desc"],
  ]);

  useEffect(() => {
    const closeSortList = (e) => {
      if (e.target !== document.querySelector(".sort__current")) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", closeSortList);
    return () => window.removeEventListener("click", closeSortList);
  }, []);

  const onSort = (e) => {
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={`sort ${isOpen ? "active" : ""}`}>
      <p className="sort__current" onClick={onSort}>
        <span>Sort: {currentSort}</span>
      </p>
      <ul className="sort__list">
        {sortItemsRef.current.map((sortItem) => (
          <li
            className={`sort__item ${
              currentSort === sortItem[0] ? "active" : ""
            }`}
            key={sortItem[0]}
            onClick={() => onSortProducts(sortItem)}
          >
            {sortItem[0]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
