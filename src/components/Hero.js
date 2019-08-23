import React from 'react';
import styled from 'styled-components';
import Container from './styled_components/Container';
import Flex from './styled_components/Flex';
import image from '../../static/images/image.png';

const HeroContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Montserrat=swap');

  min-height: 60vh;
  border: 1px solid blue;
  color: white;
  padding: 0;
  background-color: #005aef;

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 5rem;
    margin: 1.5rem 0 0 0;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    text-align: center;
    margin: 10px;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
    background-color: black;
    padding: 10px 15px;
    color: white;
    border-radius: 5px;
    display: inline-block;
    margin-top: 1rem;
    text-decoration: none;
    transition: 0.1s;
    text-align: center;
    margin: 30px 10px;
    cursor: pointer;
    border: none;
    
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

const StyledImg = styled.img`
  src: url(${props => props.src});
  alt: (${props => props.alt});
  flex: 1;
  align-self: center;
  width: 200px;
  margin-top: 2rem;
`;

const Hero = () => (
  <HeroContainer>
    <Container full>
      <Flex column alignCenter>
        <StyledImg src={image} alt="Nikhil" />
        <h1>Hi, I'm Nikhil.</h1>
        <p>I really like making things and solving interesting problems.</p>
        <Flex>
        <a href="https://www.github.com/nkhil" target="_blank" rel="noopener norefferer">
          <button>My Github</button>
        </a>
        <a href="https://registry.jsonresume.org/nkhil" target="_blank" rel="noopener norefferer">
          <button>Download My CV</button>
        </a>
        <a href="https://www.linkedin.com/in/nikhilvijayan/" target="_blank" rel="noopener norefferer">
          <button>My LinkedIn</button>
        </a>
        </Flex>
        
      </Flex>
    </Container>
  </HeroContainer>
);

export default Hero;
