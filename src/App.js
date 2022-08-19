import React from 'react';
import { Routes, Route } from 'react-router-dom'; // react-router
import LoginPage from './pages/LoginPage/LoginPage.js' // 로그인 페이지
import RegisterPage from './pages/RegisterPage/RegisterPage.js'; // 회원가입 페이지
import Todo from './pages/Todo/Todo.js'; // 투두리스트
import PrivateRoute from './components/PrivateRoute.js'; // 비 로그인 시, /todo > /
import PublicRoute from './components/PublicRoute.js'; // 로그인 시, / > /todo

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
