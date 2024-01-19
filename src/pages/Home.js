import Header from "../components/header/Header";
import Filter from "../components/filter/Filter";
import ProductsList from "../components/products-list/ProductsList";
import Sort from "../components/sort/Sort";
import PageUp from "../components/page-up/PageUp";
import { useState } from "react";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState(["By Most Popular", "sortBy=rating"]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <h1>Zaba. Online t-shirt store</h1>
      <div className="sorting">
        <Filter
          activeCategory={activeCategory}
          onChangeCategory={(category) => setActiveCategory(category)}
        />
        <Sort
          currentSort={sortBy[0]}
          onSortProducts={(sortBy) => setSortBy(sortBy)}
        />
      </div>
      <ProductsList
        category={activeCategory}
        sortBy={sortBy[1]}
        searchValue={searchValue}
      />
      <PageUp />
    </>
  );
};

export default Home;
