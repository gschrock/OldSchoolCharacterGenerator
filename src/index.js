import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretDown,
  faCaretUp,
  faExclamationTriangle,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReactDOM from "react-dom";
import AppWithContext from "./AppWithContext";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

library.add(faCaretUp, faCaretDown, faExclamationTriangle, faPlus);

ReactDOM.render(<AppWithContext />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
