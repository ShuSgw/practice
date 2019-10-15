import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./css/index.scss";

// import AppRouter from "./router-components/AppRouter";
// import TodoApp from "./Todo-components/TodoApp";
// import App from "./App";
// import ReactReduxApp from "./react-redux-components/React-ReduxApp";
import ReactReduxAppSec from "./react-redux-componentsSec/React-ReduxAppSec";

ReactDOM.render(<ReactReduxAppSec />, document.getElementById("root"));

serviceWorker.unregister();
