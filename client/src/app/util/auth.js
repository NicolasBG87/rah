import React, { useState, useContext } from "react";

import { APIContext } from "config/api";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const { getUser, authenticate } = useContext(APIContext);

  const tokenAuth = token => {
    if (token) {
      authenticate()
        .then(response => {
          setIsAuthenticated(true);
          setUser(response.data.data);
          setToken(token);
        })
        .catch(error => {
          setIsAuthenticated(false);
        });
    }
  };

  const login = (data, callback) => {
    getUser(data)
      .then(response => {
        setIsAuthenticated(true);
        setUser(response.data.data);
        setToken(response.data.token);
        data.rememberMe && saveToken(response.data.token);
        callback();
      })
      .catch(error => {
        setIsAuthenticated(false);
      });
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  const saveToken = token => {
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, isAuthenticated, user, token, tokenAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
