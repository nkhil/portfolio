/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import StyledHeader from '../components/SectionHeader';
import BlogContainer from '../components/BlogContainer';
import { allPosts } from '../constants/blog-posts';
import BlogItem from '../components/BlogItem';
import width from '../constants/width';

function BlogPage({ className }) {
  return (
    <div className={className}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nikhil Vijayan - Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout />
      <div className="section-container">
        <StyledHeader>
          <h2>Blog</h2>
          <p>Here are some things I've written</p>
        </StyledHeader>
        <BlogContainer>
          {allPosts.map((blogPost, index) => (
            <BlogItem blogPost={blogPost} index={index} />
          ))}
        </BlogContainer>
      </div>
    </div>
  );
}

const StyledBlogPage = styled(BlogPage)`
  .section-container {
    max-width: ${width.containerWidth};
    margin: auto;
    padding: 50px 0;
  }
`;

export default StyledBlogPage;
