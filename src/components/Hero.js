import React from 'react';
import styled from 'styled-components';
import Container from './styled_components/Container';
import Flex from './styled_components/Flex';
import image from '../../static/images/image.png';
import Colours from '../constants/colours';
import MainContainer from './styled_components/MainContainer';
import StyledImg from './styled_components/StyledImg';

const Button = styled.button`
  font-size: 1em;
  border-radius: 3px;

  && {
    margin: 15px 10px;
  }
`;

const Hero = () => (
  <MainContainer bgColor={Colours.primaryBlue}>
    <Container full>
      <Flex column alignCenter>
        <StyledImg src={image} alt="Nikhil" />
        <h1>Hi, I'm Nikhil.</h1>
        <p>I really like making things and solving interesting problems.</p>
        <Flex justifyCenter>
          <a href="https://www.github.com/nkhil" rel="noopener norefferer" target="_blank">
            <Button type="button">My Github</Button>
          </a>
          <a href="https://registry.jsonresume.org/nkhil" target="_blank" rel="noopener norefferer">
            <Button>Download My CV</Button>
          </a>
          <a href="https://www.linkedin.com/in/nikhilvijayan/" target="_blank" rel="noopener norefferer">
            <Button type="button">My LinkedIn</Button>
          </a>
        </Flex>
      </Flex>
    </Container>
  </MainContainer>
);

export default Hero;
