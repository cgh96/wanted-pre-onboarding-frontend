import { Button, Input } from "./styles";

interface ModifyInputProps {
  id: number;
  handleEdit: () => void;
}

function ModifyInput({ id, handleEdit }: ModifyInputProps) {
  const handleSubmit = () => {
    handleEdit();
  };

  const handleCancel = () => {
    handleEdit();
  };

  return (
    <>
      <Input id={`${id}`} data-testid="modify-input" />
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
