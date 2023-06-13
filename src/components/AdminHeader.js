import { logo } from "./constants";
import React from "react";
import { Link } from "react-router-dom";
import adminContext from "../../utils/adminContext";
import { useContext } from "react";

const AdminHeader = () => {
  const { adminLogin, setAdminLogin } = useContext(adminContext);
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" alt="okk" src={logo}></img>
      </Link>
      <ul>
        {adminLogin?.user ? (
          <>
            <li>
              <Link className="cart" to={"/admin/dashboard"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="cart" to={"/admin/list-user"}>
                Users
              </Link>
            </li>
            <li>products</li>
            <li>orders</li>
            <li>banner</li>
            <li className="">
              <Link
                onClick={() => {
                  setAdminLogin({});
                }}
                className="sign"
                to="/admin"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="">
              <Link className="sign" to="">
                Admin
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default AdminHeader;
