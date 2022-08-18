import { useState, useRef, useEffect, useCallback } from 'react'; // useState
import styled from 'styled-components'; // styled-components 
import axios from 'axios'; // axios
// 컴포넌트
import TodoTitle from './TodoTitle'; // 투두리스트 제목
import TodoItemList from './TodoItemList'; // 투두리스트 리스트
import TodoInput from './TodoInput'; // 투두리스트 입력창
import TodoModal from './TodoModal'; // 투두리스트 수정 모달

// 투두리스트 스타일
const TodoBlock = styled.div`
  width: 700px;
  height: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 50px 0;
  box-shadow: 1px 1px 10px 1px #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden; /* 넘어오는 리스트 가리기 */
`
function Todo() {
  // 투두리스트
  const [todos, setTodos] = useState([]);

  // 투두리스트 api 호출
  // token 저장
  const token = localStorage.getItem('token');
  // getTodo api 최초 1회 실행
  useEffect(() => {
    axios.get("https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setTodos(res.data);
    }).catch((error) => {
      alert(error);
    })
  }, []);

  // 투두리스트 입력
  const onInsert = (inputText) => {
    axios.post("https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos", {
      todo: inputText
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": `application/json`
      }
    }).then((res) => {
      setTodos(todos.concat(res.data)); // 실시간 리스트에 합하기
    }).catch((error) => {
      alert("입력에 실패하였습니다.");
    })
  }

  // 투두리스트 개별 아이템 삭제
  const onDelete = (id) => {
    axios.delete(`https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setTodos(todos.filter((todo) => {
        return todo.id !== id;
      }))
    }).catch((error) => {
      alert("삭제에 실패하였습니다.");
    })
  }

  // 투두리스트 수정 모달 토글
  const [modal, setModal] = useState(false); // true일 때 수정 모달이 생성
  const onModal = () => {
    setModal(!modal);
  }
  // 투두리스트 수정할 개별 아이템 선택
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelectedItem = (selectedItemValue) => {
    setSelectedItem(selectedItemValue);
  }

  // 투두리스트 내용 수정 (id, 할 일, 완료 상태)
  const onEdit = (id, todo, done) => {
    axios.put(`https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/${id}`, {
      todo: todo,
      isCompleted: done
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": `application/json`
      }
    }).then((res) => {
      setTodos(todos.map((value) => {
        return value.id === id ? {...value, todo} : value
      }));
    }).catch((error) => {
      alert("수정에 실패하였습니다.");
    })
    setModal(!modal); // 모달 종료
  }
    
  return (
    <TodoBlock>
      <TodoTitle/> {/* 투두리스트 타이틀 */}
       {/* 투두리스트 리스트 */}
      <TodoItemList 
        todos={todos}
        onDelete={onDelete}
        onModal={onModal}
        onSelectedItem={onSelectedItem}/>
       {/* 투두리스트 입력 */}
      <TodoInput
        onInsert={onInsert}/>
       {/* 투두리스트 모달 */}
      {modal === true ? <TodoModal
        todos={todos}
        onModal={onModal}
        selectedItem={selectedItem}
        onEdit={onEdit}/> : null}
    </TodoBlock>
  )
}

export default Todo