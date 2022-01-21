import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  let history = useNavigate();
  function logout() {
    localStorage.removeItem("authToken");
    history("/login");
  }
  return (
    <div className="home">
      <h1>Welcome to home</h1>
      <h1>🙂</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
