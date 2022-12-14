import React from 'react';
import styled from 'styled-components'; // styled-component
import TodoItem from './TodoItem'; // 투두리스트 개별 아이템

// 투두리스트 리스트 블록
const TodoItemListBlock = styled.div`
  flex: 1; /* 차지 가능 영역 꽉 채우기 */
  overflow: auto; /* 자동 세로 스크롤 */
`

function TodoItemList(props) {
  return (
    <TodoItemListBlock>
      {props.todos.map((v) => {
        return (
          <TodoItem
            todo={v}
            key={v.id}
            onDelete={props.onDelete}
            onModal={props.onModal}
            onSelectedItem={props.onSelectedItem}/>
        )
      })}
    </TodoItemListBlock>
  )
}

export default TodoItemList