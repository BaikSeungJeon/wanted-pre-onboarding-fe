import { useState, useEffect, useCallback } from 'react'; // useState
import styled from 'styled-components'; // styled-component

const TodoModalBlock = styled.div`
  z-index: 999;
  width: 300px;
  height: 200px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px; 
`
const ModalForm = styled.form`
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ModalInput = styled.input`
  width: 90%;
  height: 50px;
  margin: 10px auto;
  border: 1px solid #ccc;
  outline: none;
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`
const ModalButton = styled.button`
  width: 40%;
  border: 1px solid #ddd;
  cursor: pointer;
`
function TodoEditModal(props) {
  const [editText, setEditText] = useState('');
  const onChange = (e) => {
    setEditText(e.currentTarget.value);
  }
  // 투두리스트 개별 아이템 선택하면 모달창에 해당 text 가지고 오기
  useEffect(() => {
    if(props.selectedTodo){
      setEditText(props.selectedTodo)
    }
  },[props.selectedTodo])
  // 수정하기 버튼 클릭
  const onSubmit = (e) => {
    props.todos.map((v) => {
      return props.onEdit(v.id, editText)
    })
    e.preventDefault(); // 새로고침 방지
  }

  return (
    <TodoModalBlock>
      <ModalForm
      onSubmit={onSubmit}>
        <ModalInput
          type="text"
          value={editText}
          onChange={onChange}
          autoFocus
          placeholder="수정할 내용을 입력해 주세요."
        />
        <ButtonWrap>
          <ModalButton type='submit'
            onClick={onSubmit}
          >수정하기</ModalButton>
          <ModalButton onClick={props.onModal}>취소하기</ModalButton>
        </ButtonWrap>
      </ModalForm>
    </TodoModalBlock>
  )
}

export default TodoEditModal