import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "../src/context/AppContext.jsx";
import { AppStoreProvider } from "./store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppStoreProvider>
    <App />
  </AppStoreProvider>
);
