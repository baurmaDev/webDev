import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
  
    const token = localStorage.getItem("userToken");
    // const user = {
    //     userToken: undefined
    // };
    return token ? <Outlet /> : <Navigate to="/auth" />;
  
}

export default PrivateRoutes