import React from 'react';
import { MdCheckCircleOutline, MdCheckCircle, MdEdit, MdDelete } from 'react-icons/md'; // react-icons
import styled, { css } from 'styled-components'; // styled-components

const TodoItemBlock = styled.div`
  display: flex; /* 확인, 내용, 수정, 삭제 가로 정렬 */
  align-items: center; /* 세로 정렬 */ 
  margin: 0 10px 10px 10px;
  border-bottom: 1px dashed #ddd;
`
/* 아이콘 */
const IconBlock = styled.div`
  font-size: 28px;
  padding: 0 10px;
  cursor: pointer;
`
const TextBlock = styled.div`
  flex: 1;
  font-size: 18px;
  text-align: left;
`

function TodoItem(props) {
  return (
    <TodoItemBlock>
      <IconBlock>
        {props.done ? <MdCheckCircle/> : <MdCheckCircleOutline/>}
      </IconBlock>
      <TextBlock>{props.todo}</TextBlock>
      <IconBlock><MdEdit/></IconBlock>
      <IconBlock><MdDelete/></IconBlock>
    </TodoItemBlock>
  )
}

export default TodoItem