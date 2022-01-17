import React from 'react'
import styled from "styled-components";
// import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #023047;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${'' /* ${mobile({ width: "75%" })} */}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 30%;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 10px;
  border: none;
  padding: 15px 20px;
  background-color: #023047;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #457b9d;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN ACCOUNT</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
