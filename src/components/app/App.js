import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Cart, NotFound } from "../../pages";
import "./app.scss";
import "../../scss/container.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// pagination ?? observer(lazy loading items)
// add woman and children clothes
// не забудь удалить файл tShirts.js в корне проекта
