/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import StyledHeader from '../components/SectionHeader';
import GridContainer from '../components/styled_components/GridContainer';
import GridItem from '../components/GridItem';
import { allPosts } from '../constants/blog-posts';
import width from '../constants/width';
import Footer from '../components/Footer/Footer';

function BlogPage({ className }) {
  return (
    <div className={className}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nikhil Vijayan - Blog</title>
        <meta name="description" content="Blog posts written by Nikhil Vijayan" />
      </Helmet>
      <Layout>
        <div className="section-container">
          <StyledHeader>
            <h2>Blog</h2>
            <p>Here are some things I've written</p>
          </StyledHeader>
          <GridContainer>
            {allPosts.map((blogPost, index) => (
              <GridItem project={blogPost} index={index} />
            ))}
          </GridContainer>
        </div>
        <Footer />
      </Layout>
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
