/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/no-danger */
import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

const BlogContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Montserrat=swap');
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  color: #282828;

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.8;
    font-size: 1.1rem;
    font-weight: inherit;
    color: #282828;
  }

  code {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
  }

  @media screen and (max-width: 599px) {
    padding: 10px 15px;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 50px;
    }
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data

  return (
    <>
      <Layout navbarWidth="750px" navlinkColor="#000" />
      <BlogContainer>
        <h1>{post.frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogContainer>
    </>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        something
      }
    }
  }
`;
