import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../data';

const Categories = () => {

    console.log('categories', categories)
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
