import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';

const ProductPage = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Wrapper>
        <ImgContainer>
          <Image src='https://images.unsplash.com/photo-1608286022625-bc07f7a21154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80' />
        </ImgContainer>
        <InfoContainer>
          <Title>Big Screen Television</Title>
          <Description>
            This is a description of a product. You will love this product. It
            is the best product on the market in this price range. Put this in
            your living room and enjoy a movie with some popcorn.{' '}
          </Description>
          <Price>$50 </Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductPage;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2``;

const Description = styled.p``;

const Price = styled.span``;
