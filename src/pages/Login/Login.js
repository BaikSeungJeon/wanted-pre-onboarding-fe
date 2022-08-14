/* 라이브러리 */
import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
/* SASS */
import '../../styles/Login.scss';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisalbed] = useState(true)
    const onEmailHandler = (e) => {
        setEmail({email: e.currentTarget.value})
    }
    const onPasswordHandler = (e) => {
        setPassword({password: e.currentTarget.value})
    }
    // const onActiveButton = () => {
    //   state.email.includes("@") && state.password.length >= 8
    //   ? 
    //   email: "",
    //   password: "",
    //   isActive: false
    // }
    const onSubmitHandler = () => {
      axios.post("/auth/signin", {
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
            className={disabled ? 'disabledBtn' : ''}
            type="submit"
            onClick={onSubmitHandler}
            disabled={disabled}>로그인</button>

            <Link to="/register"><p className="btn-go-register">아직 회원가입이 안 되어 있으신가요?</p></Link>
          </form>
        </div>
      </>
    )
}

export default Login
