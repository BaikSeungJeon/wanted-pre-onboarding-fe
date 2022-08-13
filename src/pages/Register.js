import React from 'react'
import {Link} from 'react-router-dom';

function Register() {
  return (
    <>
      <form className="register-form">
        <label>이메일</label>
        <input type="email" value="" onChange=""/>
        <label>비밀번호</label>
        <input type="password" value="" onChange=""/>
        <label>비밀번호 확인</label>
        <input type="password" value="" onChange=""/>
        <button>회원가입</button>
        <Link to="/"><p className="btn-go-login">가입이 되어 있으신가요?</p></Link>
      </form>
    </>
  )
}

export default Register