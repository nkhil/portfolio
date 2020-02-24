/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import BlogContainer from './BlogContainer';
import BlogItem from './BlogItem';
import SectionHeader from './SectionHeader';
import colours from '../constants/colours';
import width from '../constants/width';
import GridContainer from './styled_components/GridContainer';
import GridItem from './GridItem';

function BlogPost({ data, className }) {
  return (
    <div className={className}>
      <div className="section-container">
        <SectionHeader marginTop="0px">
          <h2>Writing</h2>
          <p>Here are a few things I've written</p>
        </SectionHeader>
        <GridContainer>
          {data.map((blogPost, index) => (
            <GridItem project={blogPost} index={index} />
          ))}
        </GridContainer>
      </div>
    </div>
  );
}

const StyledBlogPost = styled(BlogPost)`
  background-color: ${colours.heroWhite};

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

export default StyledBlogPost;
