import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";

export default function Register() {
  let POST_URL_REGISTER = "http://localhost:5000/api/auth/register";
  const [error, setError] = useState("");
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const repassword = useRef();
  let navigate = useNavigate();

  const getData = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "content-type": "application/json",
      },
    };
    const formData = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      repassword: repassword.current.value,
    };
    const dataToSend = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    // if (password !== repassword) {
    //   return setError("Your password is not match");
    // }
    try {
      const { data } = await axios
        .post(POST_URL_REGISTER, dataToSend, config)
        .then((response) => {
          console.log("Data posted", formData);

          console.log(response);
          return response;
        })
        .catch((err) => {
          console.log(err);
        });
      localStorage.setItem("authToken", data.token);
      navigate("home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={getData}>
        <div>
          <label>Username</label>
          <input type="text" ref={username} required />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" ref={email} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" ref={password} required />
        </div>
        <div>
          <label>Re-password</label>
          <input type="password" ref={repassword} required />
          {error && <span>Your password is not match</span>}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
