import React from 'react';
import styled from 'styled-components';
import colours from '../constants/colours';

const BlogContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');

  margin: auto;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  color: #282828;
  margin-top: 100px;

  h1 {
    font-family: 'Poppins';
    font-size: 3.5rem;
    margin-bottom: 0px;
    line-height: 1.2;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  p {
    line-height: 1.9;
    font-size: 1.4rem;
    font-weight: 300;
    color: #282828;
  }

  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }

  blockquote cite {
    color: #999999;
    font-size: 14px;
    display: block;
    margin-top: 5px;
  }

  pre {
    border-radius: 10px;
    padding: 20px;

    code {
      font-family: 'Source Code Pro', monospace !important;
      font-size: 1rem;
    }
  }

  .language-text {
    padding: 5px 7px !important;
    background-color: #ebebeb;
    color: black;
    border-radius: 3px;
    font-size: 1rem;
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
