import React from "react";

import { ToastProvider } from "app/components/Toast";
import { SpinnerProvider } from "app/components/Spinner";
import { AuthProvider } from "app/util/auth";
import { APIProvider } from "config/api";

export const CombineContext = React.createContext();
export const ContextProvider = ({ children }) => {
  return (
    <CombineContext.Provider>
      <ToastProvider>
        <SpinnerProvider>
          <APIProvider>
            <AuthProvider>{children}</AuthProvider>
          </APIProvider>
        </SpinnerProvider>
      </ToastProvider>
    </CombineContext.Provider>
  );
};
