import React from 'react';
import styled from 'styled-components';
import { Send } from '@material-ui/icons';

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
`;

const Title = styled.h2``;
const Description = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;
