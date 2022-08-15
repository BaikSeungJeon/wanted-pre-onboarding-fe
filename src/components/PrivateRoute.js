import React from 'react';
import { Navigate } from 'react-router-dom';
/* utils */
import isLogin from '../utils/isLogin'; // 로그인 접근 권한

const PrivateRoute = ({auth, component: Component}) => {
  // 토큰 있니 ? 있으면 컴포넌트 실행 시켜 : 없으면 로그인 페이지로 보내고 팝업 띄워
  return isLogin() ? Component : <Navigate to="/" {...alert('로그인 후 이용해 주세요.')}/>
}

export default PrivateRoute