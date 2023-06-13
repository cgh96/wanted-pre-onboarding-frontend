import { useState } from "react";
import { Button, Input } from "./styles";
import type { TodoType } from "./types";

interface ModifyInputProps {
  todo: TodoType;
  handleEdit: () => void;
}

function ModifyInput({ todo, handleEdit }: ModifyInputProps) {
  const [modifyTodo] = useState<TodoType>({ ...todo });

  // const [modifyValue] = useState(todo.todo);

  const handleSubmit = () => {
    handleEdit();
  };

  const handleCancel = () => {
    handleEdit();
  };

  return (
    <>
      <Input
        id={`${todo.id}`}
        data-testid="modify-input"
        value={modifyTodo.todo}
      />
      <Button type="button" data-testid="submit-button" onClick={handleSubmit}>
        제출
      </Button>
      <Button type="button" data-testid="cancel-button" onClick={handleCancel}>
        취소
      </Button>
    </>
  );
}

export default ModifyInput;
