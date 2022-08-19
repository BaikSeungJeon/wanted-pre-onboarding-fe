import { useState } from 'react'; // useState
import { MdAddCircle } from 'react-icons/md'; // react-icons
import styled from 'styled-components'; // styled-components

// 투두리스트 입력창 블록
const TodoInputBlock = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
`
// 투두리스트 입력창 폼
const TodoInputForm = styled.form`
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px 0 10px 10px;
  padding: 10px;
`
// 투두리스트 입력창 랩
const TodoInputWrap = styled.input`
  width: 100%;
  border: none;
  outline: none;
`
// 투두리스트 입력창 아이콘(추가)
const TodoInputIcon = styled.div`
  font-size: 28px;
  padding: 0 10px;
  cursor: pointer;
`

function TodoInput(props) {
  const [todoText, setTodoText] = useState("");
  // 투두리스트 입력 핸들러
  const onTodoHandler = (e) => {
    setTodoText(e.currentTarget.value)
  }
  // 입력 버튼 클릭 시
  const onSubmit = (e) => {
    e.preventDefault(); // 자동 새로고침 방지
    if(todoText === '' || null) {
      alert('할 일을 입력해 주세요!'); // 공백 입력 방지
    }else {
      props.onInsert(todoText); // 입력창에 입력한 값 투두리스트에 등록
      setTodoText(""); // 입력창 초기화
    }
  }
  return (
    <TodoInputBlock>
      <TodoInputForm onSubmit={onSubmit}>
        <TodoInputWrap
          type="text"
          value={todoText}
          onChange={onTodoHandler}
          placeholder='할 일을 입력하신 후, Enter 혹은 우측 버튼을 클릭해 주세요!'
          autoFocus/>
      </TodoInputForm>

      <TodoInputIcon>
        <MdAddCircle onClick={onSubmit}/>
      </TodoInputIcon>
    </TodoInputBlock>
  )
}

export default TodoInput