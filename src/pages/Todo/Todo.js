import { useState } from 'react'; // useState
import styled from 'styled-components'; // styled-components 
// 컴포넌트
import TodoTitle from './TodoTitle'; // 투두리스트 제목
import TodoItemList from './TodoItemList'; // 투두리스트 리스트
import TodoInput from './TodoInput'; // 투두리스트 입력창

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
  // 할 일들
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
  return (
    <TodoBlock>
      <TodoTitle/>
      <TodoItemList todos={todos}/>
      <TodoInput/>
    </TodoBlock>
  )
}

export default Todo