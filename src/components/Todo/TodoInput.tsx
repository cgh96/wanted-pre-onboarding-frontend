import styled from "styled-components";
import { Button, Input } from "./styles";

const TodoInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

function TodoInput() {
  return (
    <TodoInputWrapper>
      <Input data-testid="new-todo-input" />
      <Button type="button" data-testid="new-todo-add-button">
        추가
      </Button>
    </TodoInputWrapper>
  );
}

export default TodoInput;
