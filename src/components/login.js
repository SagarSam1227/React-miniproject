import React, { useEffect, useState ,useContext} from "react";
import {Link} from "react-router-dom"
import useFetchImp from "../../utils/useFetchImp";
import userContext from "../../utils/userContext";


const Login = ()=>{
    const { user,setLoginUser } = useContext(userContext);
    const [username,setUserName] = useState('');
    const [status,setStatus] = useState('')
    const [password,setPassword] = useState()
    const [starPassword,setStarPassword] = useState("")

const fetchdata = useFetchImp()
if(fetchdata)console.log(fetchdata,'data........');
  
useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/user/${username}`);
          const result = await response.json();
          console.log(result.userData);
          setStatus(result.userData);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
},[username])

    return (

        <>
        <div className="log">

        <div className="login-page">
            <h3 style={{color:"#545252"}}>LOGIN</h3>
            <div className="place-holder">
                <h3>user name</h3>
                <input onChange={(e)=>{
                    setUserName(e.target.value)
                    console.log(typeof(username,username));
                }}></input>
                <h3>password</h3>
                <input  onChange={(e)=>{
                    setPassword(e.target.value)
                }}></input>

                {console.log('over over...',status)}
                {status?.username==username&&status?.password==password?
                <Link to='/'>
                <button className="log-button" onClick={(e)=>{
                    setLoginUser(status)
                }}>submit</button>
                </Link>:
                <Link to='/login'>
                <button className="log-button">submit</button>
                </Link>}
                



            </div>
                <div className="signup-link">
                <h4 style={{color:"#545252"}}>Need an account?</h4>
                <Link className="signup" to={'/signup'}>
                <h4>signup</h4>
                </Link>
                </div>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </>
    
    )
}

export default Login;