import styled from "styled-components";
import { useState } from "react";
import { Button } from "./styles";

import ModifyInput from "./ModifyInput";

interface TodoItemProps {
  id: number;
}

const Li = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  margin: 1rem 0;

  label {
    flex-grow: 1;
  }

  span {
    font-size: 1.6rem;
  }
`;

function TodoItem({ id }: TodoItemProps) {
  const [edit, setEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <Li>
      {edit && <ModifyInput id={id} handleEdit={handleEdit} />}
      {!edit && (
        <>
          <label htmlFor={`${id}`}>
            <input id={`${id}`} type="checkbox" />
            <span>TODO 1 - example</span>
          </label>
          <Button
            type="button"
            data-testid="modify-button"
            onClick={handleEdit}
          >
            수정
          </Button>
          <Button type="button" data-testid="delete-button">
            삭제
          </Button>
        </>
      )}
    </Li>
  );
}

export default TodoItem;
