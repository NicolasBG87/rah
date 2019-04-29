import React, { useContext, useEffect } from "react";

import { AuthContext } from "app/util/auth";

const Main = () => {
  const { user, tokenAuth, logout, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !isAuthenticated) {
      tokenAuth(token);
    }
  }, []);

  return (
    <div className="Main">
      <h1>Hello, {user.first_name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Main;
