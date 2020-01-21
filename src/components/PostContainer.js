import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Montserrat=swap');
  font-family: 'Open Sans', sans-serif;
  margin: auto;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  color: #282828;
  margin-top: 100px;

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.8;
    font-size: 1.1rem;
    font-weight: inherit;
    color: #282828;
  }

  code {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
  }

  @media screen and (max-width: 599px) {
    padding: 10px 15px;
    margin-top: 0px;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 50px;
    }
  }
`;

export default BlogContainer;
