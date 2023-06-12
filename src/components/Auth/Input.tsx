import { useState } from "react";
import { Label, Input, GuideMsg } from "./styles";

interface InputBoxProps {
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  testId: string;
  id: string;
  type: string;
  title: string;
  validation: boolean;
}

function InputBox({
  handleValue,
  value,
  testId,
  id,
  type,
  title,
  validation,
}: InputBoxProps) {
  const [focus, setFocus] = useState<boolean>(false);

  const handleFocus = () => {
    if (value.length === 0 && focus) {
      setFocus(false);
    } else {
      setFocus(true);
    }
  };

  const guideMsg =
    type === "email"
      ? "'@'를 포함해주세요"
      : "비밀번호는 8글자 이상으로 해주세요.";

  const visibleMsg = !validation && value.length > 0;

  return (
    <div>
      <Label htmlFor={id} focus={focus}>
        {title}
      </Label>
      <Input
        id={id}
        data-testid={testId}
        onChange={handleValue}
        type={type}
        autoComplete="off"
        value={value}
        onFocus={handleFocus}
        onBlur={handleFocus}
        visible={visibleMsg}
      />
      <GuideMsg visible={visibleMsg}>{guideMsg}</GuideMsg>
    </div>
  );
}

export default InputBox;