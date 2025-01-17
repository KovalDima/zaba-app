import { Routes, Route } from "react-router-dom";
import { Home, Cart, NotFound } from "../../pages";
import "./app.scss";
import "../../scss/container.scss";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route path="/zaba-app" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// сохранять корзину при перезагрузке (react-persist??)
// add woman clothes
// не забудь удалить файл tShirts.js в корне проекта
// при первой загрузке попадаем на страницу not found ??
// SSR !!!
