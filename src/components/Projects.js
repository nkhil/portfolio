/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Container from './styled_components/Container';
import GridItem from './styled_components/GridItem';
import MainContainer from './styled_components/MainContainer';
import GridContainer from './styled_components/GridContainer';
import Button from './styled_components/Button';
import colours from '../constants/colours';
import width from '../constants/width';
import { featuredProjects } from '../constants/projects';

function Projects({ data, className }) {
  return (
    <div className={className}>
      <div className="projects-container">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Here are some things I've made recently</p>
        </div>
        <GridContainer>
          {featuredProjects.map((project, index) => (
            <GridItem index={index} project={project} key={index} style={{ listStyleType: 'none' }} />
          ))}
        </GridContainer>
      </div>
    </div>
  );
}

const StyledProjects = styled(Projects)`
  background-color: ${colours.heroLightGrey};

  .projects-container {
    max-width: ${width.containerWidth};
    margin: auto;
  }

  .section-header {
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
  }
`;

export default StyledProjects;
