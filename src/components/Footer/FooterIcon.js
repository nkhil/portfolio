/* eslint-disable react/prop-types */
import React from 'react';

function FooterIcon({ icon: Icon, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon size={30} color="#ffffff" />
    </a>
  );
}

export default FooterIcon;
