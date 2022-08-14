/* 라이브러리 */
import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
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
  const onSubmitHandler = () => {
    axios.post("/auth/signup", {
      email: email,
      password: password 
    }).then(function(response){
      console.log('성공');
    }).catch(function(error){
      console.log(error);
    });
  }
  
  return (
    <>
      <div className="register-form-wrapper">
        <h3>회원가입</h3>
        <form className="register-form">
          <label>이름</label>
          <input type="text" value={name} onChange={onNameHandler} 
          placeholder='이름을 입력하세요.'/>
          <label>이메일</label>
          <input type="email" value={email} onChange={onEmailHandler} 
          placeholder='이메일을 입력하세요.'/>
          <label>비밀번호</label>
          <input type="password" value={password} onChange={onPasswordHandler} 
          placeholder='비밀번호는 8자 이상 설정하세요.'/>
          <label>비밀번호 확인</label>
          <input type="password" value={passwordConfig} 
          onChange={onPasswordConfigHandler} placeholder='비밀번호를 한 번 더 입력하세요.'/>
          <button type="submit" onClick={onSubmitHandler}>회원가입</button>
          <Link to="/"><p className="btn-go-login">가입이 되어 있으신가요?</p></Link>
        </form>
      </div>
    </>
  )
}

export default Register