import React, { useState } from "react";
import Login from "app/views/Home/Login";
import Register from "app/views/Home/Register";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const RightView = props => {
  const [view, setView] = useState("login");

  const changeView = () => {
    view === "login" ? setView("register") : setView("login");
  };

  return (
    <div className="Home__right">
      <TransitionGroup>
        {view === "login" ? (
          <CSSTransition
            in={view === "login"}
            timeout={300}
            classNames={"Login"}
            unmountOnExit
          >
            <Login changeView={changeView} {...props} />
          </CSSTransition>
        ) : null}
        {view === "register" ? (
          <CSSTransition
            in={view === "register"}
            timeout={300}
            classNames={"Register"}
            unmountOnExit
          >
            <Register changeView={changeView} />
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    </div>
  );
};

export default RightView;
