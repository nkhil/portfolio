/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Container from './styled_components/Container';
import GridItem from './styled_components/GridItem';
import MainContainer from './styled_components/MainContainer';
import GridContainer from './styled_components/GridContainer';

const StyledHeading = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Montserrat=swap');

  text-align: center;
  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 3rem;
    margin-bottom: 10px;
    margin-top: 0;
    padding: 50px 0 0 0;
    color: #2e2e2e;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    margin-top: 5px;
    margin-bottom: 30px;
    color: #2e2e2e;
  }

  @media screen and (max-width: 599px) {
    p {
      font-size: 1.2rem;
      padding: 0 10px;
    }
  }
`;

function Work({ data }) {
  return (
    <MainContainer bgColor="#f3f3f3">
      <Container full backgroundColor="#f3f3f3" fullVertical>
        <StyledHeading style={{ textAlign: 'center' }}>
          <h2>Projects</h2>
          <p>Here are some of my recent projects.</p>
        </StyledHeading>
        <GridContainer>
          {data.map((project, index) => (
            <GridItem index={index} project={project} key={index} style={{ listStyleType: 'none' }} />
          ))}
        </GridContainer>
      </Container>
    </MainContainer>
  );
}

export default Work;
