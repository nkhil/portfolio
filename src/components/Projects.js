/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import GridItem from './GridItem';
import GridContainer from './styled_components/GridContainer';
import SectionHeader from './SectionHeader';
import colours from '../constants/colours';
import width from '../constants/width';

function Projects({ data, className }) {
  return (
    <div className={className}>
      <div className="section-container">
        <SectionHeader marginTop="0px">
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
  background-color: ${colours.heroWhite};

  .section-container {
    max-width: ${width.containerWidth};
    margin: auto;
    padding: 50px 0;
  }

  .section-link {
    text-align: center;
    font-weight: 200px;
    margin: 50px 0;

    a {
      font-family: 'Poppins';
      text-decoration: none;
      padding: 20px 30px;
      background-color: rgb(44, 75, 255);
      color: white;
      border-radius: 5px;
      font-size: 1.5rem;
      font-weight: 400;

      &:hover {
        background-color: rgb(2, 28, 184);
      }
    }
  }
`;

export default StyledProjects;
