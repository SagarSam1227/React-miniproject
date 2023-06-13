import React from "react";
import { logo } from "./constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../utils/userContext";

const Header = () => {
  const {user,setLoginUser} = useContext(userContext);
  console.log(user,'hahahah');
 

  const [login, setLogIn] = useState("login");
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" alt="okk" src={logo}></img>
      </Link>
      <ul>
       {user?.name?<>
        <li>support</li>
        <li>cart</li>
        <li>Wishlist</li>
        <li>
          <Link className="cart" to="/cart">
            Cart
          </Link>
        </li>
       </>:<></>}
        {user?.name?
        <li className="">
        <Link onClick={()=>{
           setLoginUser({})
        }} className="sign" to="/login">
          Logout
        </Link>
      </li>:<li className="">
        <Link className="sign" to="/login">
          Login
        </Link>
      </li>}
      </ul>
    </div>
  );
};

export default Header;
