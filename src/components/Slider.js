import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {};

  return (
    <Container>
      <Arrow direction={'left'} onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageWrapper></ImageWrapper>
          <Image
            src={
              'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            }
          />
          <InfoWrapper>
            <Title>Choose Benazon</Title>
            <Description>Best online electronics store!</Description>
            <Button>Start Shopping!</Button>
          </InfoWrapper>
        </Slide>
        <Slide>
          <ImageWrapper></ImageWrapper>
          <Image
            src={
              'https://images.unsplash.com/photo-1517430796102-a3a80fe2b7a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxlbGVjdHJvbmljc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          />
          <InfoWrapper>
            <Title>We stock everything you need</Title>
            <Description>Shop all of your favorite brands here!</Description>
            <Button>Start Shopping!</Button>
          </InfoWrapper>
        </Slide>
        <Slide>
          <ImageWrapper></ImageWrapper>
          <Image
            src={
              'https://images.unsplash.com/photo-1583394708239-890b34a56a75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          />
          <InfoWrapper>
            <Title>Best Prices</Title>
            <Description>You won't find better deals anywhere!</Description>
            <Button>Start Shopping!</Button>
          </InfoWrapper>
        </Slide>
      </Wrapper>
      <Arrow direction={'right'} nClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImageWrapper = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoWrapper = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 75px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
`;
