/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import GridContainer from '../components/styled_components/GridContainer';
import GridItem from '../components/GridItem';
import Container from '../components/styled_components/Container';
import { projects } from '../constants/projects';
import StyledHeader from '../components/SectionHeader';
import Footer from '../components/Footer/Footer';

export default function Work({ data }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nikhil Vijayan - Projects</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout>
        <Container full backgroundColor="#fff" fullVertical>
          <StyledHeader>
            <h2>Projects</h2>
            <p>Here are some things I've made recently</p>
          </StyledHeader>
          <GridContainer>
            {projects.map((project, index) => (
              <GridItem index={index} project={project} key={index} style={{ listStyleType: 'none' }} />
            ))}
          </GridContainer>
        </Container>
        <Footer />
      </Layout>
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
