import React from "react";

import { ToastProvider } from "app/components/Toast";
import { SpinnerProvider } from "app/components/Spinner";
import { ModalProvider } from "app/components/Modal";
import { AuthProvider } from "app/util/auth";
import { APIProvider } from "config/api";
import { TooltipProvider } from "app/components/Tooltip";

export const CombineContext = React.createContext();
export const ContextProvider = ({ children }) => {
  return (
    <CombineContext.Provider>
      <TooltipProvider>
        <ToastProvider>
          <SpinnerProvider>
            <APIProvider>
              <AuthProvider>
                <ModalProvider>{children}</ModalProvider>
              </AuthProvider>
            </APIProvider>
          </SpinnerProvider>
        </ToastProvider>
      </TooltipProvider>
    </CombineContext.Provider>
  );
};
