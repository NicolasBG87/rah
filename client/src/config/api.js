import React, { useContext, useState } from "react";
import axios from "axios";

import { ToastContext } from "app/components/Toast";
import { SpinnerContext } from "app/components/Spinner";
import { BASE_URL, REQUEST_TIMEOUT } from "config/constants";

export const APIContext = React.createContext();
export const APIProvider = ({ children }) => {
  const { useToast } = useContext(ToastContext);
  const { useSpinner } = useContext(SpinnerContext);
  const [token, setToken] = useState(undefined);

  axios.defaults.baseURL = BASE_URL;
  axios.defaults.timeout = REQUEST_TIMEOUT;

  axios.interceptors.request.use(
    config => {
      const hasToken = localStorage.getItem("token") || token;
      if (hasToken) {
        config.headers["Authorization"] = hasToken;
      }
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
  const passwordReset = data => axios.post("/users/resetPassword", data);
  const fetchAllAuctions = data => axios.post("/auctions/all", data);
  const fetchAuction = data => axios.post("auctions/getOne", data);
  const createAuction = data => axios.post("/auctions/create", data);
  const rateSeller = data => axios.post("/users/rate", data);

  return (
    <APIContext.Provider
      value={{
        setToken,
        token,
        getUser,
        createUser,
        authenticate,
        passwordReset,
        fetchAllAuctions,
        fetchAuction,
        createAuction,
        rateSeller
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
