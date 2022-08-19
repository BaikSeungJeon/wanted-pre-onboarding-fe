import { useState } from 'react'; // useState
import { MdCheckCircleOutline, MdCheckCircle, MdEdit, MdDelete } from 'react-icons/md'; // react-icons
import styled, { css } from 'styled-components'; // styled-components

// 투두리스트 개별 아이템 블록
const TodoItemBlock = styled.div`
  display: flex; /* 확인, 내용, 수정, 삭제 가로 정렬 */
  align-items: center; /* 세로 정렬 */ 
  margin: 0 10px 10px 10px;
  border-bottom: 1px dashed #ddd;
`
// 투두리스트 개별 아이템 아이콘(수정, 삭제)
const TodoItemIcon = styled.div`
  font-size: 28px;
  padding: 0 10px;
  cursor: pointer;
`
// 투두리스트 개별 아이템 텍스트
const TodoItemText = styled.div`
  flex: 1;
  font-size: 18px;
  text-align: left;
`

function TodoItem(props) {
  // 투두리스트의 id, 할 일, 완료 여부
  const {id, todo, isCompleted} = props.todo;
  
  return (
    <TodoItemBlock>
      <TodoItemIcon>
        {/* 완료 상태 ? 꽉 찬 체크(true) : 테두리만 있는 체크(false) */}
        {isCompleted ? <MdCheckCircle/> : <MdCheckCircleOutline/>}
      </TodoItemIcon>

      <TodoItemText>{todo}</TodoItemText>

      <TodoItemIcon>
        <MdEdit 
          onClick={() => {
            props.onSelectedItem(props.todo);
            props.onModal();
          }}/>
      </TodoItemIcon>
      <TodoItemIcon>
        <MdDelete onClick={() => {props.onDelete(id)}}/>
      </TodoItemIcon>
    </TodoItemBlock>
  )
}

export default TodoItem