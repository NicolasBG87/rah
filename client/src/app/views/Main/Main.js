import React, { useContext, useEffect } from "react";

import TopBar from "app/views/Main/TopBar";
import BottomBar from "app/views/Main/BottomBar";

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
      <TopBar user={user} />
      <button onClick={logout}>Logout</button>
      <BottomBar />
    </div>
  );
};

export default Main;
