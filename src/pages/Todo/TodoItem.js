import { useState } from 'react';
import { MdCheckCircleOutline, MdCheckCircle, MdEdit, MdDelete } from 'react-icons/md'; // react-icons
import styled, { css } from 'styled-components'; // styled-components

// 투두리스트 개별 아이템 스타일
const TodoItemBlock = styled.div`
  display: flex; /* 확인, 내용, 수정, 삭제 가로 정렬 */
  align-items: center; /* 세로 정렬 */ 
  margin: 0 10px 10px 10px;
  border-bottom: 1px dashed #ddd;
`
/* 아이콘 스타일 */
const TodoItemIcon = styled.div`
  font-size: 28px;
  padding: 0 10px;
  cursor: pointer;
`
/* 텍스트 스타일 */
const TodoItemText = styled.div`
  flex: 1;
  font-size: 18px;
  text-align: left;
`

function TodoItem(props) {
  // 투두리스트의 id, 할 일, 완료 여부
  const {id, todo, isCompleted} = props.todo;
  // 체크 박스
  // const [isCompleted, setIsCompleted] = useState(false);
  
  return (
    <TodoItemBlock>
      <TodoItemIcon>
        {isCompleted ? <MdCheckCircle/> : <MdCheckCircleOutline/>}
      </TodoItemIcon>
      <TodoItemText>{todo}</TodoItemText>
      <TodoItemIcon>
        <MdEdit 
          onClick={() => {
            props.onSelectedItem(props.todo); // 클릭한 투두리스트 개별 아이템의 text
            props.onModal(); // 클릭 시 modal 출력
          }}/>
      </TodoItemIcon>
      <TodoItemIcon>
        <MdDelete
          onClick={() => {props.onDelete(id)}}/>
      </TodoItemIcon>
    </TodoItemBlock>
  )
}

export default TodoItem