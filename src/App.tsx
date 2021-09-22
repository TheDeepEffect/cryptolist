import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { routes } from "./config/routes";
import { Store } from "./Store";

function App() {
  return (
    <Store>
      <Router>
        <Switch>
          {Object.keys(routes).map((key) => {
            const value = routes[key];
            return <Route key={key} {...value} />;
          })}
        </Switch>
      </Router>
    </Store>
  );
}

export default App;
