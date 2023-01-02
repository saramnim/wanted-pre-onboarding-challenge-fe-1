import { useState } from "react";
import {
  EmailInput,
  Content,
  PasswordInput,
  SubmitBtn,
  Title,
  TitleWrapper,
  Wrapper,
} from "./style";
const Login = () => {
  const [login, setLogin] = useState<string>("");

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>TodoList</Title>
      </TitleWrapper>
      <Content>
        <EmailInput></EmailInput>
        <PasswordInput></PasswordInput>
        <SubmitBtn />
      </Content>
    </Wrapper>
  );
};

export default Login;
