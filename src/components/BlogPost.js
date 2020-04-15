/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
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
        <div className="section-link">
          <Link to="/blog">See all blog posts</Link>
        </div>
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

export default StyledBlogPost;
