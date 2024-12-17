import { useSelector, useDispatch } from "react-redux";
import {
  selectFilter,
  setActiveCategory,
} from "../../store/slices/filterSlice";
import "./filter.scss";

const Filter = () => {
  const { activeCategory, categories } = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <ul className="filter">
      {categories.map((category) => (
        <li
          key={category}
          onClick={() => dispatch(setActiveCategory({ category }))}
          className={`filter__item ${
            activeCategory === category ? "active" : ""
          }`}
        >
          {category[0].toUpperCase() + category.slice(1)}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
