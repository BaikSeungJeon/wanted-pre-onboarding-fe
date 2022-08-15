/* 라이브러리 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
/* 페이지  */
import LoginPage from './pages/LoginPage/LoginPage.js'
import RegisterPage from './pages/RegisterPage/RegisterPage.js';
import TodoList from './pages/TodoList/TodoList.js';
/* 컴포넌트 */
import PrivateRoute from './components/PrivateRoute.js';
import PublicRoute from './components/PublicRoute.js';

function App() {
  const access = localStorage.getItem("token");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/todolist" element={<PrivateRoute
        auth={access} component={<TodoList/>}
        />}/>
      </Routes>
    </div>
  );
}

export default App;
