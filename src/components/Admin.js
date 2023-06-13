import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import adminContext from "../../utils/adminContext";


const Admin =()=>{
    const [adminLogin,setAdminLogin] = useState({});
    return (
        <>
        <adminContext.Provider value={
            {adminLogin:adminLogin,
            setAdminLogin:setAdminLogin}}>
        <AdminHeader />
        <Outlet />
        <Footer />
        </adminContext.Provider>
        </>
    )
}

export default Admin;