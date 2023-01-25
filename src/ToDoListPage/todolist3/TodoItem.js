import React , {useState, useEffect} from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdCreate } from 'react-icons/md';
import axios from 'axios';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const Update = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    },
    ${Update} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${todo =>
    todo.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  //background-color: pink;
  ${todo =>
    todo.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({todo, onDel, onToggle, onUpdate}) {

    const[todos, setTodos] = useState();

    const fetchTodo = async() => {
        const res = await axios.get("/api/todo/getTodo" );
        console.log(res);
        setTodos(res.data[0]);
    }

    useEffect(
        () => {
            fetchTodo();
            return
        },[]
    )


  return (
    <TodoItemBlock>
      {/* 완료상태 */}
      <CheckCircle done={todo.done} onClick={()=>onToggle(todo.id)}>
        {todo.done && <MdDone /> }
      </CheckCircle>

      {/* 내용 */}
      <Text done={todo.done}>{todo.content}</Text>

      {/* 수정버튼 */}
      <Update onClick={()=>onUpdate(todo.id)}>
        <MdCreate/>
      </Update>

      {/* 삭제버튼 */}
      <Remove >
        <MdDelete onClick={()=>onDel(todo.id)} />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
