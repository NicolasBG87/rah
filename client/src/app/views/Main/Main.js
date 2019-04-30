import React, { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import TopBar from "app/views/Main/TopBar";
import BottomBar from "app/views/Main/BottomBar";
import Sidebar from "app/views/Main/Sidebar";
import Center from "app/views/Main/Center";
import Browse from "app/views/Main/Browse/Browse";

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
      {user && user.auctions ? (
        <React.Fragment>
          <TopBar user={user} logout={logout} />
          <Sidebar user={user} />
          <Center>
            <Switch>
              <Route path="/" exact component={Browse} />
              <Route path="/bids" exact component={Browse} />
              <Route path="/auctions" exact component={Browse} />
              <Route path="/analytics" exact component={Browse} />
              <ManagerRoute path="/manage" exact component={Browse} />
              <AdminRoute path="/admin" exact component={Browse} />
              <Route
                render={() => (
                  <div>No content found mathing the route you entered.</div>
                )}
              />
            </Switch>
          </Center>
          <BottomBar user={user} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Main;
