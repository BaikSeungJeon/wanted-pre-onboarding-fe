/* 라이브러리 */
import React from 'react';
import {Routes, Route} from 'react-router-dom';
/* 컴포넌트  */
import Login from './pages/Login/Login.js'
import Register from './pages/Register/Register.js';
import TodoList from './pages/TodoList/TodoList.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/todolist" element={<TodoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
