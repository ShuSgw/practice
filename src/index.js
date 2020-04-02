import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./css/index.scss";

// import "./react-redux-componentsSec/firebase/firebase";
// import "./simple-react-todo/firebase/firebase";

// import AppRouter from "./router-components/AppRouter";
// import TodoApp from "./Todo-components/TodoApp";
// import App from "./App";
// import ReactReduxApp from "./react-redux-components/React-ReduxApp";
// import Sample from "./ES6/promise";
// import ReactReduxAppSec from "./react-redux-componentsSec/React-ReduxAppSec";
// import ReactReduxThird from "./react-reduxThird/React-ReduxAppThird";

// import TodoWithDB from "./simple-react-todo/React-ReduxAppSec";

// import App from "./review2020_03_05";
// import App from "./review2020_03_31";
// import App from "./review2020_03_31";
import App from "./review2020_04_02";

// import MemoApp from "./MemoApp";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
