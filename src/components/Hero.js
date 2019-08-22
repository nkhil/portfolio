import React from 'react';
import styled from 'styled-components';
import Container from './styled_components/Container';
import Flex from './styled_components/Flex';
import image from '../../static/images/image.png';

const HeroContainer = styled(Container)`
  min-height: 60vh;
  border: 1px solid blue;
  color: black;
  padding: 0;
`;

const StyledImg = styled.img`
  src: url(${props => props.src});
  alt: (${props => props.alt});
  flex: 1;
  align-self: center;
  width: 150px;
`;

const Hero = () => (
  <HeroContainer>
    <Container fullVertical full>
      <Flex column alignCenter>
        <StyledImg src={image} alt="Nikhil" />
        <h1>Hi, I'm Nikhil</h1>
        <p>I really like making things and solving interesting problems</p>
      </Flex>
    </Container>
  </HeroContainer>
);

export default Hero;
