import { useState } from "react";
import { Content, ContentBox, Input, Name, SubmitBtn, Title, TitleWrapper, Wrapper } from "./style";

const SignUp = () => {
  const [login, setLogin] = useState<string>("");

    return (
      <Wrapper>
        <TitleWrapper>
          <Title>Sign up</Title>
        </TitleWrapper>
        <Content>
          <ContentBox>
            <Name>Email </Name>
            <Name>Password </Name>
          </ContentBox>
          <ContentBox>
            <Input></Input>
            <Input></Input>
          </ContentBox>
        </Content>
        <SubmitBtn>Submit</SubmitBtn>
      </Wrapper>
    );
};

export default SignUp;