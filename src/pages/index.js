/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import BlogPosts from '../components/BlogPost';
import Footer from '../components/Footer/Footer';
import { featuredProjects } from '../constants/projects';
import { featuredBlogs } from '../constants/blog-posts';

export default ({ data }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Hey, I'm Nikhil.</title>
      <meta name="description" content="Nikhil Vijayan is a software developer from London." />
    </Helmet>

    <Layout>
      <Hero />
      <Projects data={featuredProjects} />
      <BlogPosts data={featuredBlogs} />
      <Footer />
    </Layout>
  </>
);

export const pageQuery = graphql`
  query IndexQuery {
    blog: allMarkdownRemark(limit: 10, filter: { fileAbsolutePath: { regex: "/blog/.*md$/" } }) {
      edges {
        node {
          frontmatter {
            title
            description
            path
            date
          }
          html
          id
        }
      }
    }
    project: allMarkdownRemark(limit: 9, filter: { fileAbsolutePath: { regex: "/projects/.*md$/" } }) {
      edges {
        node {
          frontmatter {
            title
            description
            path
            date
            tags
          }
          html
          id
        }
      }
    }
  }
`;
