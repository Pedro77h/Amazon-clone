import React from "react";
import { Container, Main } from "../styles/sharedStyles";
import { LoginContainer } from "../styles/loginStyles";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  return (
    <Container>
      <Main>
        <LoginContainer>
          <LoginForm />
        </LoginContainer>
      </Main>
    </Container>
  );
};

export default Login;
