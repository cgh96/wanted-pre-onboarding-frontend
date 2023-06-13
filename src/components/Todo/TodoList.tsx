import styled from "styled-components";

import TodoItem from "./TodoItem";

const TodoListWrapper = styled.div`
  padding: 1rem;

  ul {
    width: 100%;
  }
`;

function TodoList() {
  return (
    <TodoListWrapper>
      <ul>
        <TodoItem id={1} />
        <TodoItem id={2} />
      </ul>
    </TodoListWrapper>
  );
}

export default TodoList;
