import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={"/"}>Register</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
      </ul>
    </div>
  );
}
