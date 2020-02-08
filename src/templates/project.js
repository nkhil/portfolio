/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PostContainer from '../components/PostContainer';
import Footer from '../components/Footer/Footer';

export default function ProjectTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data

  // const { frontmatter, html } = markdownRemark;
  return (
    <>
      <Helmet>
        <title>{`Nikhil Vijayan - ${post.frontmatter.title}`}</title>
      </Helmet>
      <Layout>
        <div className="blog-post-container">
          <PostContainer>
            <h1>{post.frontmatter.title}</h1>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </PostContainer>
        </div>
        <Footer />
      </Layout>
    </>
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
