import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./css/index.scss";
// import "./react-redux-componentsSec/firebase/firebase";

// import AppRouter from "./router-components/AppRouter";
// import TodoApp from "./Todo-components/TodoApp";
// import App from "./App";
// import ReactReduxApp from "./react-redux-components/React-ReduxApp";
// import Sample from "./ES6/promise";
// import ReactReduxAppSec from "./react-redux-componentsSec/React-ReduxAppSec";
import ReactReduxThird from "./react-reduxThird/React-ReduxAppThird";

ReactDOM.render(<ReactReduxThird />, document.getElementById("root"));

serviceWorker.unregister();
