import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from './features/userSlice';

function HeaderComponent() {
  const isSignedIn = localStorage.getItem("userToken")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Header>
        <div style={{display: 'flex', justifyContent: 'end'}}>
            {isSignedIn ? <span style={{color: 'white'}} onClick={() => {
              dispatch(logout())
              navigate("/auth")
            }}>Log out</span> 
            : <span style={{color: 'white'}} onClick={() => navigate("/auth")}>Sign In</span>}
        </div>
    </Header>
  )
}

export default HeaderComponent