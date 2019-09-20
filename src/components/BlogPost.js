/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from './styled_components/Container';
import MainContainer from './styled_components/MainContainer';

function BlogPost({ className, data }) {
  return (
    <>
      <div className={className}>
        <MainContainer bgColor="#eee">
          <Container full backgroundColor="#eee" fullVertical>
            <h2>Writing</h2>
            <p>
              I learn best by teaching. It also helps me document my learning. Here are a few articles I've written.
            </p>
            <ul>
              {data.map(({ node }) => (
                <li key={node.id}>
                  <Link to={node.frontmatter.path}>
                    <span className="test">{node.frontmatter.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </MainContainer>
      </div>
    </>
  );
}

export default BlogPost;
