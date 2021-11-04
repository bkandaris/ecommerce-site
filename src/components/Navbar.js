import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <SearchBox>
            <Input placeholder='search'></Input>
            <Search style={{ color: 'gray', fontSize: '28px' }} />
          </SearchBox>
        </LeftSide>
        <Center>
          <Logo>Benazon</Logo>
        </Center>
        <RightSide>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <Badge badgeContent={4} color='Primary'>
            <ShoppingCartOutlined></ShoppingCartOutlined>
          </Badge>
        </RightSide>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: lightgrey;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Wrapper = styled.div`
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div`
  flex: 1;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 30px;
  ${mobile({ flex: 2, justifyContent: 'center' })};
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  border: none;
  height: 25px;
  text-align: center;
  ${mobile({ width: '60px' })};
`;

const Logo = styled.h1`
  align-items: center;
  ${mobile({ fontSize: '24px' })};
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin: 0 20px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })};
`;
