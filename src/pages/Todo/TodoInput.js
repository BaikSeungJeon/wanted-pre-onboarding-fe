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
/* 아이콘 스타일 */
const IconBlock = styled.div`
  font-size: 28px;
  padding: 0 10px;
  cursor: pointer;
`

function TodoInput({onInsert}) {
  const [todoText, setTodoText] = useState("");
  const onPlanHandler = (e) => {
    setTodoText(e.currentTarget.value)
  }
  // 입력 버튼 클릭 시
  const onSubmit = (e) => {
    e.preventDefault(); // 자동 새로고침 방지
    if(todoText === '' || null) {
      alert('할 일을 입력해 주세요!'); // 공백 입력 방지
    }else {
      onInsert(todoText); // 입력창에 입력한 값 투두리스트에 등록
      setTodoText(""); // 입력창 초기화
    }
  }
  return (
    <TodoInputBlock>
      <TodoInputForm
        onSubmit={onSubmit}
        autoFocus // form에 Focus 둘 시, Enter로도 입력 가능
      >
        <TodoInputBox
          type="text"
          value={todoText}
          onChange={onPlanHandler}
          placeholder='할 일을 입력하신 후, Enter 혹은 우측 버튼을 클릭해 주세요!'
          autoFocus
        />
      </TodoInputForm>
      <IconBlock>
        <MdAddCircle
          onClick={onSubmit}
        />
      </IconBlock>
    </TodoInputBlock>
  )
}

export default TodoInput