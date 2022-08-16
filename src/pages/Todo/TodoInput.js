import { useState } from 'react'; // useState
import { MdAddCircle } from 'react-icons/md'; // react-icons
import styled from 'styled-components'; // styled-components

const TodoInputBlock = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
`
/* 투두리스트 입력창 폼 */
const TodoInputForm = styled.form`
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px 0 10px 10px;
  padding: 10px;
`
/* 투두리스트 입력창 */
const TodoInputBox = styled.input`
  width: 100%;
  border: none;
  outline: none;
`
/* 아이콘 */
const IconBlock = styled.div`
  font-size: 28px;
  padding: 0 10px;
  cursor: pointer;
`

function TodoInput() {
  const [schedule, setSchedule] = useState("");
  const onPlanHandler = (e) => {
    setSchedule(e.currentTarget.value)
  }
  // 입력 버튼 클릭 시
  const onAdd = (e) => {
    e.preventDefault();
    setSchedule(""); // 입력창 초기화
    // alert('hi');
  }
  // 엔터 시 입력
  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onAdd();
    }
  }
  return (
    <TodoInputBlock>
      <TodoInputForm>
        <TodoInputBox
          id="todoInput"
          type="text"
          value={schedule}
          onKeyPress={onKeyPress}
          onChange={onPlanHandler}
          placeholder='할 일을 입력하신 후, Enter 혹은 우측 버튼을 클릭해 주세요!'
          autoFocus
        />
      </TodoInputForm>
      <IconBlock onClick={onAdd}><MdAddCircle/></IconBlock>
    </TodoInputBlock>
  )
}

export default TodoInput