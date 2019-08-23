import React from 'react';
import styled from 'styled-components';
import Container from './styled_components/Container';
import Flex from './styled_components/Flex';
import image from '../../static/images/image.png';

const HeroContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Raleway&display=swap');

  min-height: 60vh;
  border: 1px solid blue;
  color: white;
  padding: 0;
  background-color: #005aef;

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 4rem;
    margin: 1.5rem 0 0 0;
  }

  p {
    font-family: 'Raleway', sans-serif;
    font-size: 1.5rem;
    text-align: center;
    margin: 10px;
  }
`;

const StyledImg = styled.img`
  src: url(${props => props.src});
  alt: (${props => props.alt});
  flex: 1;
  align-self: center;
  width: 150px;
  margin-top: 2rem;
`;

const Hero = () => (
  <HeroContainer>
    <Container full>
      <Flex column alignCenter>
        <StyledImg src={image} alt="Nikhil" />
        <h1>Hi, I'm Nikhil.</h1>
        <p>I really like making things and solving interesting problems</p>
      </Flex>
    </Container>
  </HeroContainer>
);

export default Hero;
