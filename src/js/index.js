import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import { addArticle } from "./actions";

window.store = store;
window.addArticle = addArticle;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
