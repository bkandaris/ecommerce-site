import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Products from './Products';
import NewsLetter from './Newsletter';
import { mobile } from '../responsive';

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title></Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Brands:</FilterText>
          <Select>
            <Option disabled selected>
              Acer
            </Option>
            <Option>Sony</Option>
            <Option>Toshiba</Option>
            <Option>Panasonic</Option>
            <Option>Samsung</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Option
            </Option>
            <Option>New</Option>
            <Option>Used</Option>
            <Option>Refurbished</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price - ascending</Option>
            <Option>Price - descending</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
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
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })};
`;

const Option = styled.option``;
