import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import App from "./App";
import "./bootstrap.min.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <ReduxProvider store={configureStore()}>
    <App />
  </ReduxProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
