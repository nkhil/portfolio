import React from 'react';
import Container from './styled_components/Container';
import Flex from './styled_components/Flex';
import image from '../../static/images/image.png';
import Colours from '../constants/colours';
import MainContainer from './styled_components/MainContainer';
import StyledImg from './styled_components/StyledImg';

const Hero = () => (
  <MainContainer bgColor={Colours.primaryBlue}>
    <Container full>
      <Flex column alignCenter>
        <StyledImg src={image} alt="Nikhil" />
        <h1>Hi, I'm Nikhil.</h1>
        <p>I really like making things and solving interesting problems.</p>
        <Flex>
          <a
            href="https://www.github.com/nkhil"
            rel="noopener norefferer"
            target="_blank"
          >
            <button type="button">My Github</button>
          </a>
          <a
            href="https://registry.jsonresume.org/nkhil"
            target="_blank"
            rel="noopener norefferer"
          >
            <button type="button">Download My CV</button>
          </a>
          <a
            href="https://www.linkedin.com/in/nikhilvijayan/"
            target="_blank"
            rel="noopener norefferer"
          >
            <button type="button">My LinkedIn</button>
          </a>
        </Flex>
      </Flex>
    </Container>
  </MainContainer>
);

export default Hero;
