import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { routes } from "./config/routes";

function App() {
  return (
    <Router>
      <Switch>
        {Object.keys(routes).map((key) => {
          const value = routes[key];
          return <Route {...value} />;
        })}
      </Switch>
    </Router>
  );
}

export default App;
