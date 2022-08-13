/* 라이브러리 */
import React from 'react';
import {Routes, Route} from 'react-router-dom';
/* 컴포넌트  */
import Login from './pages/Login'
import Register from './pages/Register';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
