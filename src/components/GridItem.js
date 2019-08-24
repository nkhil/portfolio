/* eslint-disable react/prop-types */
import React from 'react';

const GridItem = ({ project, index, className }) => {
  const { title, blurb, tags } = project;

  return (
    <li key={index} className={className} style={{ listStyleType: 'none' }}>
      <h2>{title}</h2>
      <p>{blurb}</p>
      <ul>
        {tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    </li>
  );
};

export default GridItem;
