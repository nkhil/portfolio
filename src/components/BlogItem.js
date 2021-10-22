/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

function BlogItem({ project, index, className }) {
  const { path, title } = project;

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
    list-style-type: none;
    padding-left: 20px;
    padding-bottom: 20px;
    padding-top: 10px;
    text-decoration: none;
    border-radius: 5px;
    &:hover {
      border: 1px solid #eee;
      background-color: #fafafa;
    }
  }

  h2 {
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    text-align: center;
  }

  @media screen and (max-width: 599px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default StyledBlogItem;
