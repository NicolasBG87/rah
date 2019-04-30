import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "app/util/auth";

const ManagerRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        user.role !== "user" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default ManagerRoute;
