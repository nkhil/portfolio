/* eslint-disable react/prop-types */
import React from 'react';
import Flex from './styled_components/Flex';
import Container from './styled_components/Container';
import Projects from '../constants/projects';

function Work({ className }) {
  return (
    <Container fullVertical className={className}>
      <Flex justifyCenter>
        <ul>
          {Projects.map((project, index) => (
            <li key={index}>
              <h2>{project.title}</h2>
              <p>{project.blurb}</p>
              <ul>
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Flex>
    </Container>
  );
}

export default Work;
