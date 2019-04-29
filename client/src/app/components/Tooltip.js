import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export const TooltipContext = React.createContext();
export const TooltipProvider = ({ children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [content, setContent] = useState("");
  const [location, setLocation] = useState({ top: 0, left: 0 });

  const useTooltip = (content, location) => {
    setContent(content);
    setLocation(location);
    setShowTooltip(true);
  };

  const closeTooltip = () => setShowTooltip(false);

  return (
    <TooltipContext.Provider value={{ useTooltip, closeTooltip }}>
      {children}
      <CSSTransition
        in={showTooltip}
        timeout={300}
        classNames={"Tooltip"}
        unmountOnExit
      >
        <div
          className="Tooltip"
          style={{
            top: location.top + "px",
            left: location.left + "px"
          }}
        >
          <div className="Tooltip__wrapper">
            <span className="Tooltip__content">{content}</span>
          </div>
        </div>
      </CSSTransition>
    </TooltipContext.Provider>
  );
};
