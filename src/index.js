import ReactDOM from "react-dom/client";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";

import App from "./components/App";


import tshirts from "./components/reducers" 

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      // console.log("ACTION TYPE", action.type);
    }

    next(action);
  };

const store = createStore(tshirts, applyMiddleware(logger, thunk));
// console.log("Store", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
