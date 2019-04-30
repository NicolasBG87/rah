import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "app/util/auth";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        user.role === "admin" ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRoute;
