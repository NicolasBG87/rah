import React, { useContext, useEffect } from "react";

import TopBar from "app/views/Main/TopBar";
import BottomBar from "app/views/Main/BottomBar";
import Sidebar from "app/views/Main/Sidebar";

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
      {user && user.auctions ? (
        <React.Fragment>
          <TopBar user={user} logout={logout} />
          <Sidebar user={user} />
          <BottomBar user={user} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Main;
