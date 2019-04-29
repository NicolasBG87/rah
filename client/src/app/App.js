import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "app/util/PrivateRoute";

import Home from "app/views/Home/Home";
import Main from "app/views/Main/Main";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact component={Home} />
          <PrivateRoute path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
