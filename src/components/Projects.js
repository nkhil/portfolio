/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import GridItem from './GridItem';
import GridContainer from './styled_components/GridContainer';
import SectionHeader from './SectionHeader';
import colours from '../constants/colours';
import width from '../constants/width';
import { featuredProjects } from '../constants/projects';

function Projects({ data, className }) {
  return (
    <div className={className}>
      <div className="section-container">
        <SectionHeader>
          <h2>Projects</h2>
          <p>Here are some things I've made recently</p>
        </SectionHeader>
        <GridContainer>
          {data.map((project, index) => (
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

  .section-container {
    max-width: ${width.containerWidth};
    margin: auto;
    padding: 50px 0;
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
        color: ${colours.headlineGrey};
      }
    }
  }
`;

export default StyledProjects;
