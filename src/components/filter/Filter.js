import "./filter.scss";

const Filter = ({ activeCategory, onChangeCategory }) => {
  const categories = ["all", "man", "women", "children"];

  return (
    <ul className="filter">
      {categories.map((category) => (
        <li
          key={category}
          onClick={() => onChangeCategory(category)}
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
