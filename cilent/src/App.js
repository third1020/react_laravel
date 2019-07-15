import React from "react";
import "./css/App.css";
import routes from "./routes";
import withTracker from "./withTracker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Login from "./js/components/auth/Login";

export default () => (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME || ""}>
        <Route exact path="/" component={Login} />
        <div>
            {routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={withTracker(props => {
                            return (
                                <route.layout {...props}>
                                    <route.component {...props} />
                                </route.layout>
                            );
                        })}
                    />
                );
            })}
        </div>
    </BrowserRouter>
);
