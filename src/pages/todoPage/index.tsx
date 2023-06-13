import styled from "styled-components";

import useRedirectByJwt from "hooks/useRedirectByJwt";
import TodoInput from "components/Todo/TodoInput";
import TodoList from "components/Todo/TodoList";

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;

  padding: 1rem;
`;

function TodoPage() {
  useRedirectByJwt();
  return (
    <Wrapper>
      <TodoInput />
      <TodoList />
    </Wrapper>
  );
}

export default TodoPage;
