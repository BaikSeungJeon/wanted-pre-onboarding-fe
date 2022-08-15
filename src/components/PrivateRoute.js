import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({auth, component: Component}) => {
  return auth ? Component : <Navigate to="/todolist"/>
}

export default PrivateRoute