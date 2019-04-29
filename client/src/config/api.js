import React, { useContext } from "react";
import axios from "axios";

import { ToastContext } from "app/components/Toast";
import { SpinnerContext } from "app/components/Spinner";
import { BASE_URL, REQUEST_TIMEOUT } from "config/constants";

export const APIContext = React.createContext();
export const APIProvider = ({ children }) => {
  const { useToast } = useContext(ToastContext);
  const { useSpinner } = useContext(SpinnerContext);
  const token = localStorage.getItem("token");

  axios.defaults.baseURL = BASE_URL;
  axios.defaults.timeout = REQUEST_TIMEOUT;
  axios.defaults.headers.common["Authorization"] = token || "";

  axios.interceptors.request.use(
    config => {
      useSpinner(true);
      return config;
    },
    error => {
      useSpinner(false);
      useToast({ message: error.response.data.message });
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    response => {
      useSpinner(false);
      useToast({ message: response.data.message, error: false });
      return response;
    },
    error => {
      useSpinner(false);
      useToast({ message: error.response.data.message });
      return Promise.reject(error);
    }
  );

  // API calls - public methods
  const getUser = data => axios.post("/users/login", data);
  const createUser = data => axios.post("/users/register", data);
  const authenticate = () => axios.post("/users/authenticate");

  return (
    <APIContext.Provider value={{ getUser, createUser, authenticate }}>
      {children}
    </APIContext.Provider>
  );
};
