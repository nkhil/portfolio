/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import raspberry from '../../static/images/raspberry.png';

const GridItem = ({ project, index, className }) => {
  const { path, title, description, src } = project;

  return (
    <li key={index} className={className} style={{ listStyleType: 'none' }}>
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`${path}`}>
        <div className='icon'>
          <img src={src} width='120px' alt={title} />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </li>
  );
};

export default GridItem;
