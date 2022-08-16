import { useState } from 'react'; // useState
import { Link, Navigate, useNavigate } from 'react-router-dom'; // react-router
import axios from 'axios'; // axios
// SASS
import '../../styles/RegisterPage.scss';

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  // 로그인 유효성 검사. email @ 포함, password 8자 이상
  const isValidRegister = !(email.includes("@") && password.length >= 8 && password == confirmPassword)
  // 이름 입력 시
  const onNameHandler = (e) => {
    setName(e.currentTarget.value)
  }
  // 이메일 입력 시 useState
  const onEmailHandler = (e) => {
      setEmail(e.currentTarget.value)
  }
  // 비밀번호 입력 시 useState
  const onPasswordHandler = (e) => {
      setPassword(e.currentTarget.value)
  }
  // 비밀번호 확인 입력 시 useState
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value)
  }
  // useNavigate
  const navigate = useNavigate()
  // 회원가입 클릭 시 
  const onSubmit = (e) => {
    e.preventDefault();
    // axios
    axios.post("https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signup", {
      email: email,
      password: password
    }).then((res) => {
      alert('회원가입에 성공하였습니다.');
      navigate("/") // 로그인 화면으로 redirect
    }).catch((error) => {
      alert('회원가입에 실패하였습니다.');
    });
  }

  return (
    <>
      <div className="register-form-wrapper">
        <h3>회원가입</h3>
        <form className="register-form">
          <label>이름</label>
          <input
          type="text"
          value={name}
          onChange={onNameHandler} 
          placeholder='이름을 입력하세요.'/>

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
          placeholder='비밀번호는 8자 이상 설정해 주세요.'/>

          <label>비밀번호 확인</label>
          <input
          type="password"
          value={confirmPassword} 
          onChange={onConfirmPasswordHandler}
          placeholder='비밀번호를 한 번 더 입력하세요.'/>

          <button
          className={isValidRegister ? 'disabledBtn' : ''}
          type="submit"
          onClick={onSubmit}
          disabled={isValidRegister}>회원가입</button>

          <Link to="/"><p className="btn-go-login">가입이 되어 있으신가요?</p></Link>
        </form>
      </div>
    </>
  )
}

export default Register