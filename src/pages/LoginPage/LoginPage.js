/* 라이브러리 */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
/* SASS */
import '../../styles/Login.scss';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // 로그인 유효성 검사. email @ 포함, password 8자 이상
    const isValidLogin = !(email.includes("@") && password.length >= 8)
    // 이메일 입력 시 useState
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    // 비밀번호 입력 시 useState
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    // useNavigate
    const navigate = useNavigate();
    // 로그인 클릭 시
    const onSubmit = (e) => {
      e.preventDefault();
      // console.log(email, password);

      // axios
      axios.post("https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signin", {
        email: email,
        password: password 
      }).then((res) => {
        console.log(res);
        alert('로그인에 성공하였습니다.');
        // 로컬스토리지에 토큰 저장
        if(res.data.access_token) { 
          localStorage.setItem('token', res.data.access_token);
        }
        navigate("/todolist"); // todolist로 redirect
      }).catch((error) => {
        alert('로그인에 실패하였습니다.');
      });
    }
    return (
      <>
        <div className="login-form-wrapper">
          <h3>로그인</h3>
          <form className="login-form">
            <label>이메일</label>
            <input 
            type="email" 
            value={email} 
            onChange={onEmailHandler}
            placeholder='이메일을 입력하세요.'/>
            <label>비밀번호</label>

            <input 
            type="password" 
            value={password} 
            onChange={onPasswordHandler}
            placeholder='비밀번호를 입력하세요.'/>

            <button
            className={isValidLogin ? 'disabledBtn' : ''}
            type="submit"
            onClick={onSubmit}
            disabled={isValidLogin}>로그인</button>

            <Link to="/register"><p className="btn-go-register">아직 회원가입이 안 되어 있으신가요?</p></Link>
          </form>
        </div>
      </>
    )
}

export default Login
