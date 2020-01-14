/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Hero from '../components/styled_components/Hero';
import Work from '../components/Projects';
import BlogPost from '../components/styled_components/BlogPost';
import Colours from '../constants/colours';

export default ({ data }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nikhil Vijayan - Hi, I'm Nikhil.</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>

    <Layout navbarWidth="750px">
      <Hero />
      <Work data={data.project.edges} />
      <BlogPost data={data.blog.edges} />
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
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
