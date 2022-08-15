import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({auth, component: Component}) => {
  return auth ? Component : <Navigate to="/"/>
}

export default PublicRoute