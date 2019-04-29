import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "app/util/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated || token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
