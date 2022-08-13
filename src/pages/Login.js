/* 라이브러리 */
import {useState} from 'react';
import {Link} from 'react-router-dom';
/* SASS */
import '../styles/Login.scss';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    return (
        <>
            <form className="login-form">
                <label>이메일</label>
                <input type="email" value={email} onChange={onEmailHandler}/>
                <label>비밀번호</label>
                <input type="password" value={password} onChange={onPasswordHandler}/>
                <button>로그인</button>
                <Link to="/register"><p className="btn-go-register">아직 회원가입이 안 되어 있으신가요?</p></Link>
            </form>
        </>
    )
}

export default Login
