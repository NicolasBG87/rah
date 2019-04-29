import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "./style/index.scss";
import * as serviceWorker from "./serviceWorker";

import { ContextProvider } from "./app/util/combineContext";

const app = (
  <ContextProvider>
    <App />
  </ContextProvider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
