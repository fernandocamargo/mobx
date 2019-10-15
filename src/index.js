import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Style from "./components/Style";
import App from "./App";

render(
  <BrowserRouter>
    <Fragment>
      <Style />
      <App />
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
