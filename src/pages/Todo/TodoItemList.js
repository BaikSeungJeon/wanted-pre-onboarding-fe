import React from 'react';
import styled from 'styled-components'; // styled-component
import TodoItem from './TodoItem'; // 투두리스트 개별 아이템

// 투두리스트 리스트 스타일
const TodoItemListBlock = styled.div`
  flex: 1; /* 차지 가능 영역 꽉 채우기 */
  overflow-y: auto; /* 자동 세로 스크롤 */
`

function TodoItemList(props) {
  return (
    <TodoItemListBlock>
      {props.todos.map((v) => {
        return (
          // 투두리스트 개별 아이템으로 할 일, id 값, 완료 유무 전송
          <TodoItem todo={v.todo} key={v.id} done={v.isCompleted}/>
        )
      })}
    </TodoItemListBlock>
  )
}

export default TodoItemList