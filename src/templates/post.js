/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Footer from '../components/Footer/Footer';
import RelatedBlogPosts from '../components/RelatedBlogs';
import PostContainer from '../components/PostContainer';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data

  return (
    <>
      <Helmet>
        <title>{`${post.frontmatter.title}`}</title>
      </Helmet>
      <Layout>
        <PostContainer>
          <h1>{post.frontmatter.title}</h1>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          <RelatedBlogPosts currentPath={post.frontmatter.path} />
        </PostContainer>
        <Footer />
      </Layout>
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
