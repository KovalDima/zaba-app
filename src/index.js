import React from "react";
import ReactDOM from "react-dom/client";
import store, { persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HashRouter } from "react-router-dom";
import App from "./components/app/App";

import "./scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>
);
