/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer/Footer';
import { featuredProjects } from '../constants/projects';
import { featuredBlogs } from '../constants/blog-posts';
import NotFound from '../components/NotFound';

export default ({ data }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nikhil Vijayan - Hi, I'm Nikhil.</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>

    <Layout>
      <Hero />
      <Projects data={featuredProjects} />
      <BlogPost data={featuredBlogs} />
      <NotFound />
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
