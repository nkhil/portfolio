/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import GridItem from './GridItem';
import GridContainer from './styled_components/GridContainer';
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
        <div className="section-link">
          <Link to="/projects">See all projects</Link>
        </div>
      </div>
    </div>
  );
}

const StyledProjects = styled(Projects)`
  background-color: ${colours.heroLightGrey};

  .projects-container {
    max-width: ${width.containerWidth};
    margin: auto;
    padding: 50px 0;
  }

  .section-header {
    /* @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Montserrat=swap'); */

    text-align: center;
    h2 {
      font-size: 3.6rem;
      margin-bottom: 10px;
      margin-top: 0;
      padding: 50px 0 0 0;
      color: ${colours.headlineGrey};
    }

    p {
      font-size: 1.5rem;
      margin-top: 5px;
      margin-bottom: 30px;
      color: #2e2e2e;
      font-weight: 220;
    }

    @media screen and (max-width: 599px) {
      p {
        font-size: 1.2rem;
        padding: 0 10px;
      }
    }
  }

  .section-link {
    text-align: center;
    font-size: 2rem;
    font-weight: 200px;
    margin: 50px 0;

    a {
      text-decoration: none;
      color: ${colours.primaryBlue};
      padding-bottom: 5px;
      font-weight: 300;

      &:hover {
        color: ${colours.headlineGrey}
      }
    }
  }
`;

export default StyledProjects;
