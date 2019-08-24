/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Flex from './styled_components/Flex';
import Container from './styled_components/Container';
import Projects from '../constants/projects';
import StyledGridItem from './styled_components/GridItem';

const GridContainer = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: auto;
  justify-content: space-around;
`;

const StyledHeading = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Montserrat=swap');

  text-align: center;
  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 3rem;
    margin-bottom: 10px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    margin-top: 5px;
  }
`;

// const GridItem = styled.div`
//   justify-self: center;
//   text-align: left;
//   padding: 10px;
//   background-color: #fff;
//   margin: 0.5rem 0;
//   position: relative;
//   border-radius: 5px;
//   border: 1px solid rgb(213, 213, 213);
//   box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);

//   li {
//     list-style-type: none;
//   }
// `;

function Work({ className }) {
  return (
    <Container full fullVertical>
      <StyledHeading style={{ textAlign: 'center' }}>
        <h2>Projects</h2>
        <p>Here are some of my recent projects.</p>
      </StyledHeading>
      <GridContainer className={className}>
        {Projects.map((project, index) => (
          <StyledGridItem index={index} project={project} key={index} style={{ listStyleType: 'none' }} />
        ))}
      </GridContainer>
    </Container>
  );
}

export default Work;
