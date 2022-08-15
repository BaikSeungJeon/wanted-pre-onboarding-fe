import React from 'react'

const isLogin = () => {
  if(!localStorage.getItem('token')) {
    alert("로그인 후 이용이 가능합니다.");
    window.location.replace('/');
  }
}

export default isLogin