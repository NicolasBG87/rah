import React from "react";

import { ToastProvider } from "app/components/Toast";
import { SpinnerProvider } from "app/components/Spinner";
import { ModalProvider } from "app/components/Modal";
import { AuthProvider } from "app/util/auth";
import { APIProvider } from "config/api";

export const CombineContext = React.createContext();
export const ContextProvider = ({ children }) => {
  return (
    <CombineContext.Provider>
      <ToastProvider>
        <SpinnerProvider>
          <APIProvider>
            <AuthProvider>
              <ModalProvider>{children}</ModalProvider>
            </AuthProvider>
          </APIProvider>
        </SpinnerProvider>
      </ToastProvider>
    </CombineContext.Provider>
  );
};
