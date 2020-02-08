/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

function Logo({ className }) {
  return (
    <div className={className}>
      <Link to="/">
        <p>Nik</p>
        <p>Hil</p>
      </Link>
    </div>
  );
}

const StyledLogo = styled(Logo)`
  margin-right: auto;
  padding-left: 50px;
  border: 8px solid black;
  padding: 5px 5px;
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.75);

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;
    margin: 0;
    line-height: 0.8;
  }

  .small-text {
    font-size: 0.7rem;
  }

  &:hover {
    cursor: pointer;
    box-shadow: none;
    border: 8px solid blue;
    color: blue;
  }
`;

export default StyledLogo;
