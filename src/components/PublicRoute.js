import React from 'react';
import { Navigate } from 'react-router-dom'; // react-router
import isLogin from '../utils/isLogin'; // 로그인 접근 권한 식별

const PrivateRoute = ({auth, component: Component}) => {
  // 토큰 있니 ? 있으면 로그인 되었다는 alert 실행 : 없으면 로그인 페이지(LoginPage)로 redirect
  return isLogin() ? <Navigate to="/todo" {...alert('이미 로그인이 되어 있습니다.')}/> : Component
}

export default PrivateRoute