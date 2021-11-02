import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title></Title>
      <FilterContainer>
        <Filter></Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
    </Container>
  );
};

export default ProductList;

const Container = styled.div``;

const Title = styled.h1`
  margin: 15px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 15px;
`;
