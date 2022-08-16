import React from 'react';
import { Routes, Route } from 'react-router-dom'; // react-router
// 페이지
import LoginPage from './pages/LoginPage/LoginPage.js' // 로그인
import RegisterPage from './pages/RegisterPage/RegisterPage.js'; // 회원가입
import Todo from './pages/Todo/Todo.js'; // 투두리스트
// 컴포넌트
import PrivateRoute from './components/PrivateRoute.js'; // 로그인 접근 권한
import PublicRoute from './components/PublicRoute.js'; // 로그인 접근 권한

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PublicRoute component={<LoginPage/>}/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/todo" element={<PrivateRoute component={<Todo/>}/>}/>
      </Routes>
    </div>
  );
}

export default App;
