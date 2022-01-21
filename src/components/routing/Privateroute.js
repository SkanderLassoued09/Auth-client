import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

/* const useAuth = () => {
  const user = { isLoggin: true };
  return user && user.isLoggin;
}; */

export default function Privateroute() {
  let URL_GET_PRIVATE_DATA = "http://localhost:5000/api/private/";
  const history = useNavigate();
  const [privateData, setPrivateData] = useState();
  const [error, setError] = useState("");
  // const isAuth = useAuth();
  // return localStorage.getItem("authToken") ? <Outlet /> : <Navigate to="/" />; isAuth ? <Outlet /> : <Login />;
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history("login");
      function fetchPrivateData() {
        const config = {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        try {
          const data = axios.get(URL_GET_PRIVATE_DATA, config);
          setPrivateData(data.data);
        } catch (error) {
          setError("You are not authorized", error);
          localStorage.removeItem("authToken");
        }
      }
      fetchPrivateData();
    }
  }, [history, URL_GET_PRIVATE_DATA]);

  return error ? <span>{error}</span> : <Outlet />;
}
