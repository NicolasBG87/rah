import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TopBar from "app/views/Main/TopBar";
import BottomBar from "app/views/Main/BottomBar";
import Sidebar from "app/views/Main/Sidebar";
import Center from "app/views/Main/Center";
import Browse from "app/views/Main/Browse/Browse";
import Auctions from "app/views/Main/Auctions/Auctions";

import { AuthContext } from "app/util/auth";
import AdminRoute from "app/util/AdminRoute";
import ManagerRoute from "app/util/ManagerRoute";

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
      {user ? (
        <React.Fragment>
          <TopBar user={user} logout={logout} />
          <Sidebar user={user} />
          <Center>
            <Switch>
              <Route path="/browse" exact component={Browse} />
              <Route path="/bids" exact component={Browse} />
              <Route path="/auctions" exact component={Auctions} />
              <Route path="/analytics" exact component={Browse} />
              <ManagerRoute path="/manage" exact component={Browse} />
              <AdminRoute path="/admin" exact component={Browse} />
              <Route render={() => <Redirect to="/browse" />} />
            </Switch>
          </Center>
          <BottomBar user={user} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Main;
