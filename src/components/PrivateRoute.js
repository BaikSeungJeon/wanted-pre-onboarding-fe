import React from 'react';
import { Navigate } from 'react-router-dom'; // react-router
import isLogin from '../utils/isLogin'; // 로그인 접근 권한 식별

const PrivateRoute = ({auth, component: Component}) => {
  // 토큰 있니 ? 있으면 컴포넌트(Todo) 실행 : 없으면 로그인 페이지(LoginPage)로 redirect
  return isLogin() ? Component : <Navigate to="/" {...alert('로그인 후 이용해 주세요.')}/>
}

export default PrivateRoute