import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useValidation from "./hooks/useValidation";
import usePathname from "./hooks/usePathname";
import useRegister from "./hooks/useRegister";
import useLogin from "./hooks/useLogin";

import { Form, Button } from "./styles";
import InputBox from "./Input";

function AuthForm() {
  const navigate = useNavigate();

  const [signUp] = useRegister();
  const [signIn] = useLogin();

  const [isSignin] = usePathname();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const testId = isSignin ? "signin-button" : "signup-button";
  const text = isSignin ? "로그인" : "회원가입";

  const [emailValidation] = useValidation("email", email);
  const [passwordValidation] = useValidation("password", password);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignin) {
      const data = await signIn(email, password);

      if (data.data) {
        navigate("/todo");
      }
    } else {
      const data = await signUp(email, password);

      if (data.data === "") {
        navigate("/signin");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{text}</legend>
        <InputBox
          id="email"
          testId="email-input"
          handleValue={handleEmail}
          value={email}
          type="email"
          title="이메일"
          validation={emailValidation}
        />
        <InputBox
          id="password"
          testId="password-input"
          handleValue={handlePassword}
          value={password}
          type="password"
          title="패스워드"
          validation={passwordValidation}
        />
        <Button
          type="submit"
          data-testid={testId}
          disabled={!emailValidation || !passwordValidation}
        >
          {text}
        </Button>
      </fieldset>
    </Form>
  );
}

export default AuthForm;
