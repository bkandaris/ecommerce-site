import React from 'react';
import styled from 'styled-components';
import { ourProducts } from '../data';
import Product from './Product';

const Products = () => {
  return (
    <Container>
      {ourProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;
