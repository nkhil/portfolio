/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';

const GridItem = ({ project, index, className }) => {
  const { path, title, tags, description } = project.node.frontmatter;
  return (
    <li key={index} className={className} style={{ listStyleType: 'none' }}>
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`${path}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </li>
  );
};

export default GridItem;
