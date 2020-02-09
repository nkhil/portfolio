import React from 'react';
import styled from 'styled-components';
import colours from '../constants/colours';

const BlogContainer = styled.div`
  margin: auto;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  color: #282828;
  margin-top: 100px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 0px;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    line-height: 1.9;
    font-size: 1.4rem;
    font-weight: 300;
    color: #282828;
  }

  ol {
    line-height: 1.9;
    font-size: 1.4rem;
    font-weight: 300;
    color: #282828;
  }

  img {
    height: auto;
    width: 100%;
  }

  .gatsby-resp-image-image {
    height: auto !important;
    position: relative !important;
  }

  .gatsby-resp-image-background-image {
    padding-bottom: 0 !important;
  }

  a {
    text-decoration: none;
    color: blue;
    padding-bottom: 2px;

    &:hover {
      border-bottom: 1px solid blue;
    }

    &:visited {
      color: blue;
    }
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
      font-size: 2.7rem;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 50px;
      word-wrap: break-word;
    }
  }
`;

export default BlogContainer;
