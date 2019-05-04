import React, { useState, useContext } from "react";

import { APIContext } from "config/api";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(undefined);
  const { getUser, authenticate, passwordReset, setToken, token } = useContext(
    APIContext
  );

  const tokenAuth = token => {
    if (token) {
      setToken(token);
      authenticate()
        .then(response => {
          setUser(response.data.data);
          setIsAuthenticated(true);
        })
        .catch(error => {
          logout();
        });
    }
  };

  const login = (data, callback) => {
    getUser(data)
      .then(response => {
        data.rememberMe && localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        setUser(response.data.data);
        setIsAuthenticated(true);
        callback();
      })
      .catch(error => {
        setIsAuthenticated(false);
      });
  };

  const resetPassword = data => {
    return passwordReset(data);
  };

  const logout = () => {
    setToken(undefined);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        user,
        token,
        tokenAuth,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
