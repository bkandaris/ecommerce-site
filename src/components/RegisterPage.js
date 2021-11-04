import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Make an Account</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='email' />
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, darkgrey, white);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: '80%' })};
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  cursor: pointer;
`;
