import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export const ToastContext = React.createContext();
export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }, [toast]);

  const useToast = ({
    message = "You didn't provide a message to this toast!",
    error = true
  }) => {
    setToast({ message, error });
    setShowToast(true);
  };

  return (
    <ToastContext.Provider value={{ useToast }}>
      {children}
      <CSSTransition
        in={showToast}
        timeout={300}
        classNames={"Toast"}
        unmountOnExit
      >
        <div
          className={`Toast Toast__${toast.error ? "danger" : "info"}`}
          onClick={() => setShowToast(false)}
        >
          {toast.message || ""}
          <span className="Toast__close" onClick={() => setShowToast(false)}>
            ✖
          </span>
        </div>
      </CSSTransition>
    </ToastContext.Provider>
  );
};
