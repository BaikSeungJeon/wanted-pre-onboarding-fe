import React from 'react';
import styled from 'styled-components'; // styled-components

const TodoTitleBlock = styled.div`
  border-bottom: 1px solid #ccc;
`

function TodoTitle() {
  return (
    <TodoTitleBlock>
      <h3>할 일을 작성해 주세요!</h3>
    </TodoTitleBlock>
  )
}

export default TodoTitle