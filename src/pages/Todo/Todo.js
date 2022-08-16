import { useState, useRef } from 'react'; // useState
import styled from 'styled-components'; // styled-components 
import axios from 'axios'; // axios
// 컴포넌트
import TodoTitle from './TodoTitle'; // 투두리스트 제목
import TodoItemList from './TodoItemList'; // 투두리스트 리스트
import TodoInput from './TodoInput'; // 투두리스트 입력창

// 투두리스트 스타일
const TodoBlock = styled.div`
  width: 700px;
  height: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 50px 0;
  box-shadow: 1px 1px 10px 1px #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
function Todo() {
  // axios api getTodo 호출
  const token = localStorage.getItem('token');

  axios.get("https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  // 투두리스트 배열
  const [todos, setTodos] = useState([
    {
      "id": 1,
      "todo": "todo2",
      "isCompleted": false,
      "userId": 1
    },
    {
      "id": 2,
      "todo": "todo3",
      "isCompleted": false,
      "userId": 1
    }
  ])
  const newId = useRef(3); // 새 아이디 선언
  const onInsert = (inputText) => {
    axios.post("https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": `application/json`
      },
      body: {
        todo: inputText
      }
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }
  // const onInsert = (inputText) => {
  //   const newTodoArr = {
  //     "id": newId.current,
  //     "todo": inputText,
  //     "isCompleted": false
  //   };
  //   setTodos(todos.concat(newTodoArr)); // 기존 배열 합해 새 배열 반환
  //   newId.current++; // id 증가
  // }
  return (
    <TodoBlock>
      <TodoTitle/>
      <TodoItemList todos={todos}/>
      <TodoInput onInsert={onInsert}/>
    </TodoBlock>
  )
}

export default Todo