/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { featuredBlogs } from '../constants/blog-posts';

function RelatedBlogPosts({ className, currentPath }) {

  const blogPosts = featuredBlogs.filter(post => post.path != currentPath);

  return (
    <div className={className}>
      <h2>Other posts I've written</h2>
      <ul>
        {blogPosts.map(post => (
          <li>
            <Link to={post.path}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const StyledRelatedBlogPosts = styled(RelatedBlogPosts)`
  
  margin-top: 50px;

  h2 {
    color: black;
    font-size: 2rem;
    border-top: 2px solid black;
    padding-top: 20px;
  }
  
  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    text-decoration: none !important;
  }
/* 
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



  @media screen and (max-width: 599px) {
    h2 {
      font-size: 1.8rem;
    }
  } */
`;

export default StyledRelatedBlogPosts;
