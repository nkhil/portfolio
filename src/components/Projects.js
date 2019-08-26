/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Container from './styled_components/Container';
import Projects from '../constants/projects';
import StyledGridItem from './styled_components/GridItem';

const GridContainer = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: auto;
  justify-content: space-around;
  padding-inline-start: 0px;
`;

const StyledHeading = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Montserrat=swap');

  text-align: center;
  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 3rem;
    margin-bottom: 10px;
    color: #2e2e2e;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    margin-top: 5px;
  }

  @media screen and (max-width: 599px) {
    p {
      font-size: 1.2rem;
      padding: 0 10px;
    }
  }
`;

function Work({ className }) {
  return (
    <Container full fullVertical>
      <StyledHeading style={{ textAlign: 'center' }}>
        <h2>Projects</h2>
        <p>Here are some of my recent projects.</p>
      </StyledHeading>
      <GridContainer className={className}>
        {Projects.map((project, index) => (
          <StyledGridItem
            index={index}
            project={project}
            key={index}
            style={{ listStyleType: 'none' }}
          />
        ))}
      </GridContainer>
    </Container>
  );
}

export default Work;
