/* 라이브러리 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
/* 페이지  */
import LoginPage from './pages/LoginPage/LoginPage.js'
import RegisterPage from './pages/RegisterPage/RegisterPage.js';
import Todo from './pages/Todo/Todo.js';
/* 컴포넌트 */
import PrivateRoute from './components/PrivateRoute.js';
import PublicRoute from './components/PublicRoute.js';

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
