/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

function BlogItem({ blogPost, index, className }) {
  const { path, title } = blogPost;

  return (
    <div className={className}>
      <Link to={path}>
        <li key={index}>
          <h2>{title}</h2>
        </li>
      </Link>
    </div>
  );
}

const StyledBlogItem = styled(BlogItem)`
  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    text-decoration: none !important;
  }

  li {
    width: 100%;
    padding: 20px;
    border-radius: 15px;
    background-color: #fff;
    margin: 20px 0;
    text-decoration: none;
    &:hover {
      box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
    }
  }

  h2 {
    color: black;
    font-size: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 599px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export default StyledBlogItem;
