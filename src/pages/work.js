/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BlogPost from '../components/styled_components/BlogPost';
import Colours from '../constants/colours';

export default function Work({ data }) {
  const { edges } = data.project;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Projects</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Layout navbarWidth="800px" backgroundColor={Colours.primaryBlue}>
        {/* {console.log(data.project.edges)} */}
        {console.log('edges', edges)}

        {/* <Hero />
      <Work data={data.project} /> */}
        <ul>
          {edges.map(({ node }) => (
            <li>{node.frontmatter.title}</li>
          ))}
        </ul>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query ProjectQuery {
    project: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/.*md$/" } }) {
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
