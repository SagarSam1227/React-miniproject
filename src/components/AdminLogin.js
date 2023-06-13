import React, { useEffect,useState,useContext } from "react";
import { Link } from "react-router-dom";
import adminContext from "../../utils/adminContext";

const AdminLogin = () => {
    const {AdminLogin,setAdminLogin} = useContext(adminContext);
    const [adminAuth,setAdminAuth] = useState()
    const [adminUsername,setAdminUsername]=useState();
    const [adminPasswrd,setAdminPasswrd] =useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/admin-authentication"
        );
        const result = await response.json();
       console.log(result);
       setAdminAuth(result)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[]);
  return (
    <>
      <div className="log">
        <div className="login-page">
          <h3 style={{ color: "#545252" }}>ADMIN LOGIN</h3>
          <div className="place-holder">
            <h3>user name</h3>
            <input
              onChange={(e) => {
                setAdminUsername(e.target.value)
              }}
            ></input>
            <h3>password</h3>
            <input
              onChange={(e) => {
                setAdminPasswrd(e.target.value)
              }}
            ></input>
            {adminUsername==adminAuth?.user&&adminPasswrd==adminAuth?.password?
            <Link to="/admin/dashboard">
            <button onClick={()=>{
                setAdminLogin(adminAuth)
            }} className="log-button">
              submit
            </button>
          </Link>:<Link to="/admin">
            <button className="log-button">
              submit
            </button>
          </Link>}
            
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default AdminLogin;
