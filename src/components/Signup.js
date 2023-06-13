import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [name,setName] = useState()
    const [mailId,setMailId] = useState()
    const [contact,setContact] = useState()
    const [password,setPassword] = useState()

// useEffect(()=>{

//     const myData ={
//         name:"name",
//         mailId:"mailId",
//         contact:"contact",
//         password:"password"
//     }

//     const fetchData = async () => {
//         try {
//           const response = await fetch('http://localhost:3000/users-list',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({myData})
//           });
//           const result = await response.json();
//           console.log(result);

//         } catch (error) {
//           console.error(error);
//         }
//       };
//       fetchData();
// },[])

const myData ={
            name:name,
            mailId:mailId,
            contact:contact,
            password:password
        }

const handleSubmit = async (myData) => {
    // e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(myData)
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <>
      <div className="log">
        <div className="login-page">
          <h3 style={{ color: "#545252" }}>SIGN UP</h3>
          <div className="place-holder">
           
              <h3>name</h3>
              <input onChange={(e) => {
                setName(e.target.value)
              }}></input>

              <h3>E-mail</h3>
              <input onChange={(e) => {
                setMailId(e.target.value)
              }}></input>
   
         
              <h3>contact</h3>
              <input onChange={(e) => {
                setContact(e.target.value)
              }}></input>

              <h3>password</h3>
              <input onChange={(e) => {
                setPassword(e.target.value)
              }}></input>

            <Link to="/login">
              <button onClick={()=>{
                handleSubmit(myData)
              }} className="log-button">submit</button>
            </Link>
          </div>
          <div className="signup-link">
            <h4 style={{ color: "#545252" }}>Already have an account?</h4>
            <Link className="signup">
              <h4>Login</h4>
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
  );
};

export default Signup;
