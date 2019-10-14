import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./css/index.scss";

// import AppRouter from "./router-components/AppRouter";
// import TodoApp from "./Todo-components/TodoApp";
// import App from "./App";
import ReactReduxApp from "./react-redux-components/React-ReduxApp";

ReactDOM.render(<ReactReduxApp />, document.getElementById("root"));
serviceWorker.unregister();
