import React from "react";
import { logo } from "./constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../utils/userContext";

const Header = () => {
  const {user} = useContext(userContext);
  console.log(user);

  const [login, setLogIn] = useState("login");
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" alt="okk" src={logo}></img>
      </Link>
      <ul>
        <li
          className=""
          onClick={() => {
            if (login === "login") {
              setLogIn("logout");
            } else {
              setLogIn("login");
            }
          }}
        >
          <Link className="sign" to="/login">
            Login
          </Link>
        </li>
        <li>{user.email}</li>
        <li>{user.name}</li>
        <li>Wishlist</li>
        <li>
          <Link className="cart" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
