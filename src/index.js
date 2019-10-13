import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./css/index.scss";

import AppRouter from "./router-components/AppRouter";

import {createStore} from "redux";

ReactDOM.render(<AppRouter />, document.getElementById("root"));

const store = createStore((s = {sample: 0}, a) => {
  console.log("running");
  if (a.type === "SAMPLE") {
    return {sample: s.sample + 1};
  } else {
    return s;
  }
});

serviceWorker.unregister();
