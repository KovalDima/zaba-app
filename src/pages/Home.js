import Header from "../components/header/Header";
import Filter from "../components/filter/Filter";
import ProductsList from "../components/products-list/ProductsList";
import Sort from "../components/sort/Sort";
import PageUp from "../components/page-up/PageUp";

const Home = () => {
  return (
    <>
      <Header />
      <h1>Zaba. Online t-shirt store</h1>
      <div className="sorting">
        <Filter />
        <Sort />
      </div>
      <ProductsList />
      <PageUp />
    </>
  );
};

export default Home;
