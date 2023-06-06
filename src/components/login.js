import React from "react";
import {Link} from "react-router-dom"


const Login = ()=>{

    return (

        <>
        <div className="log">

        <div className="login-page">
            <h3 style={{color:"#545252"}}>LOGIN</h3>
            <div className="place-holder">
                <h3>user name</h3>
                <input></input>
                <h3>password</h3>
                <input></input>
                <Link to='/'>
                <button className="log-button">submit</button>
                </Link>
            </div>
                <div className="signup-link">
                <h4 style={{color:"#545252"}}>Need an account?</h4>
                <h4>signup</h4>
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