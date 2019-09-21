/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

export default function ProjectTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data

  // const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.date}</h2>
        <h2>{post.something}</h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
}

export const postQuery = graphql`
  query ProjectPostByPath($path: String!) {
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
