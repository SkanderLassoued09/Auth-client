import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  let POST_URL_LOGIN = "http://localhost:5000/api/auth/login";
  const [error, setError] = useState("");
  const history = useNavigate();
  const email = useRef();
  const password = useRef();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history("/home");
    }
  }, [history]);

  async function getData(e) {
    e.preventDefault();
    const formData = {
      email: email.current.value,
      password: password.current.value,
    };

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    try {
      // we send this request we get back a token
      const { data } = await axios
        .post(POST_URL_LOGIN, formData, config)
        .then((response) => {
          console.log("Logged in with success");
          return response;
        });
      localStorage.setItem("authToken", data.token);
      history("/home");
    } catch (error) {
      console.log(error.response.data.error);
      setError(error);
    }
  }
  return (
    <div className="login">
      <h1>Hello Login</h1>
      <form onSubmit={getData}>
        <div>
          <label>E-mail</label>
          <input type="email" ref={email} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" ref={password} required />
        </div>
        <div>
          <button>Submit</button>
        </div>
        {error && <span>Something went wrong</span>}
      </form>
    </div>
  );
}
