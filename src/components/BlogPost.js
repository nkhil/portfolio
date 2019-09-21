/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from './styled_components/Container';
import MainContainer from './styled_components/MainContainer';
import GridContainer from './styled_components/GridContainer';
import GridItem from './styled_components/GridItem';

const H2 = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 3rem;
  text-align: center;
  color: #2e2e2e;
  margin: 0;
  padding: 50px 10px 0px;
`;

const P = styled.p`
  && {
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    color: #2e2e2e;
  }
`;

function BlogPost({ data }) {
  return (
    <>
      <div>
        <MainContainer bgColor="#eee">
          <Container full backgroundColor="#eee" fullVertical>
            <H2>Writing</H2>
            <P>
              I learn best by teaching. It also helps me document my learning. Here are a few articles I've written.
            </P>
            <GridContainer>
              {data.map((project, index) => (
                <GridItem index={index} project={project} key={index} style={{ listStyleType: 'none' }} />
              ))}
            </GridContainer>
          </Container>
        </MainContainer>
      </div>
    </>
  );
}

export default BlogPost;
