import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { App } from "./components";

import VIEWS_COLLECTION from "./constants/constants";
import routesData from "./constants/routes.json";

const RouteComposition = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      <Component {...props} />
  )}/>
);

const Routes =  
    routesData ?
        routesData.map((route, index) => {
            return (
                <RouteComposition
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    title={route.title}
                    description={route.description}
                    component={ VIEWS_COLLECTION[route.component] }/>
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
