/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

function Logo({ className }) {
  return (
    <div className={className}>
      <Link to="/">
        <p>N</p>
      </Link>
    </div>
  );
}

const StyledLogo = styled(Logo)`
  margin-right: auto;
  padding-left: 50px;
  border-radius: 50%;
  background-color: black;
  padding: 12px;

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.7rem;
    text-transform: uppercase;
    margin: 0;
    line-height: 0.8;
    color: white;
  }

  .small-text {
    font-size: 0.7rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default StyledLogo;
