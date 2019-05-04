import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { App } from "./components";

import { VIEWS_COLLECTION } from "./constants/constants";
import routesData from "./constants/routes.json";

const Routes =
    routesData ?
        routesData.map((route, index) => {
            return (
                <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={VIEWS_COLLECTION[route.component]} />
            );
        })
    : null;

ReactDOM.render(
  <BrowserRouter>
    <App>
      { Routes }
    </App>
  </BrowserRouter>,
document.getElementById('root'));
