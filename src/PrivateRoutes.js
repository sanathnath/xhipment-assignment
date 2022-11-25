import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserState } from './contexts/UserContext'

function PrivateRoutes() {
  const {user} = UserState();

  return (
    user != null || user != undefined ?
    <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes