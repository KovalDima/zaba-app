import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "../preloader/Preloader";
import "./app.scss";
import "../../scss/container.scss";

const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "../../pages/Home")
);
const Cart = lazy(() =>
  import(/* webpackChunkName: "Cart" */ "../../pages/Cart")
);
const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ "../../pages/NotFound")
);

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Suspense fallback={<Preloader global={true} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;

// reload images
// SSR ??
// mistakes in projects video
