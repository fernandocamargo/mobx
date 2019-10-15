import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import { HomePage, ModelerPage, FrameworksPage } from "./pages";
import { Navigation } from "./components";

const menu = [
  { url: "/", label: "HOME" },
  { url: "/modeler", label: "MODELER" },
  { url: "/frameworks", label: "FRAMEWORKS" }
];

export default () => (
  <div>
    <Navigation items={menu} />
    <hr />
    <Suspense fallback={<p>Loading...</p>}>
      <Route path="/" component={HomePage} exact />
      <Route path="/modeler" component={ModelerPage} exact />
      <Route path="/frameworks" component={FrameworksPage} exact />
    </Suspense>
  </div>
);
