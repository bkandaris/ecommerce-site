import React from 'react';
import styled from 'styled-components';
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  Mail,
} from '@material-ui/icons';

const Footer = () => {
  return (
    <Container>
      <LeftSide>
        <Logo>Benazon</Logo>
        <Description>
          With so many places to shop online it can be hard to decide where you
          decide to make your purchase. At Benazon we make it easy! Great
          Products, Better Deals!
        </Description>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </LeftSide>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Laptops</ListItem>
          <ListItem>Cell Phones</ListItem>
          <ListItem>Headphones</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <RightSide>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}} /> 100 Main Street, New York City
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}} /> 1-555-555-5555
        </ContactItem>
        <ContactItem>
          <Mail  style={{marginRight: "10px"}}/> support@benazon.com
        </ContactItem>
      </RightSide>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
`;
const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const RightSide = styled.div`
  flex: 1;
  padding: 20px;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const Logo = styled.h2``;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
