import React from 'react';
import styled from 'styled-components';
import { Send } from '@material-ui/icons';
import { mobile } from '../responsive';

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder=' Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

const Container = styled.div`
  height: 60vh;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 65px;
  margin: 15px;
`;
const Description = styled.div`
  font-size: 22px;
  font-weight: 250;
  margin-bottom: 3px;
  ${mobile({ textAlign: 'center' })};
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid darkgrey;
  ${mobile({ width: '80%' })};
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: lightblue;
  color: white;
`;
