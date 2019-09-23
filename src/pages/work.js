/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Colours from '../constants/colours';
import GridContainer from '../components/styled_components/GridContainer';
import GridItem from '../components/styled_components/GridItem';
import Container from '../components/styled_components/Container';

export default function Work({ data }) {
  const { edges } = data.projects;
  console.log('TCL: Work -> edges', edges);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Projects</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout navbarWidth="750px" navlinkColor="#000"></Layout>
      <Container full backgroundColor="#fff" fullVertical>
        <GridContainer>
          {edges.map((project, index) => (
            <GridItem index={index} project={project} key={index} style={{ listStyleType: 'none' }} />
          ))}
        </GridContainer>
      </Container>
    </>
  );
}

export const pageQuery = graphql`
  query ProjectQuery {
    projects: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/.*md$/" } }) {
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
