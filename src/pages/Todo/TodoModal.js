import { useState, useEffect, useCallback } from 'react'; // useState
import styled from 'styled-components'; // styled-component
import { MdCheckCircleOutline, MdCheckCircle } from 'react-icons/md'; // react-icons

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
const TodoModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const TodoModalIcon = styled.div`
  font-size: 28px;
  padding: 0 10px;
  cursor: pointer;
`
const TodoModalInput = styled.input`
  width: 90%;
  height: 50px;
  margin: 10px auto;
  border: 1px solid #ccc;
  outline: none;
`
const TodoModalButtonWrap = styled.div`
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
  // 투두리스트 완료 체크 버튼
  const [doneCheck, setDoneCheck] = useState(props.selectedItem.isCompleted);
  const onCheckButton = () => {
    // 클릭 시 기존 isCompleted의 반대를 전송해 주면 됨.
    setDoneCheck(!props.selectedItem.isCompleted);
  }

  // 투두리스트 개별 아이템 선택하면 모달창에 해당 text 가지고 오기
  useEffect(() => {
    if(props.selectedItem.todo){
      setEditText(props.selectedItem.todo)
    }
  },[props.selectedItem.todo])

  // 수정하기 버튼 클릭
  const onSubmit = (e) => {
    props.onEdit(props.selectedItem.id, editText, doneCheck);
    e.preventDefault(); // 새로고침 방지
  }

  return (
    <TodoModalBlock>
      <TodoModalForm
        onSubmit={onSubmit}>
        <TodoModalIcon onClick={() => {
          onCheckButton();
        }}>
          {doneCheck ? <MdCheckCircle/> : <MdCheckCircleOutline/>}
        </TodoModalIcon>
        <TodoModalInput
          type="text"
          value={editText}
          onChange={onChange}
          autoFocus
          placeholder="수정할 내용을 입력해 주세요."
        />
        <TodoModalButtonWrap>
          <ModalButton type='submit'
            onClick={onSubmit}
          >수정하기</ModalButton>
          <ModalButton onClick={props.onModal}>취소하기</ModalButton>
        </TodoModalButtonWrap>
      </TodoModalForm>
    </TodoModalBlock>
  )
}

export default TodoEditModal