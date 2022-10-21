import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from './auth/Auth'
import Main from './Main'
import PrivateRoutes from './PrivateRoutes'

function AppRoutes() {
  return (
    <Routes>
        <Route element={<PrivateRoutes />}>
            <Route element={<Main />} path="/" />
        </Route>
        <Route element={<Auth />} path="/auth" />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes