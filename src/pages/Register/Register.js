/* 라이브러리 */
import {useState} from 'react';
import {Link} from 'react-router-dom';
/* SASS */
import '../../styles/Register.scss';

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfig, setPasswordConfig] = useState("")
  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }
  const onPasswordConfigHandler = (event) => {
    setPasswordConfig(event.currentTarget.value)
  }
  return (
    <>
      <form className="register-form">
        <label>이름</label>
        <input type="text" value={name} onChange={onNameHandler}/>
        <label>이메일</label>
        <input type="email" value={email} onChange={onEmailHandler}/>
        <label>비밀번호</label>
        <input type="password" value={password} onChange={onPasswordHandler}/>
        <label>비밀번호 확인</label>
        <input type="password" value={passwordConfig} onChange={onPasswordConfigHandler}/>
        <button>회원가입</button>
        <Link to="/"><p className="btn-go-login">가입이 되어 있으신가요?</p></Link>
      </form>
    </>
  )
}

export default Register