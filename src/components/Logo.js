/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../../static/images/logo.png';

function Logo({ className, width }) {
  return (
    <div className={className}>
      <Link to='/'>
        <img src={logo} alt="Nikhil" width={width} />
      </Link>
    </div>
  );
}

const StyledLogo = styled(Logo)`
  margin-right: auto;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default StyledLogo;
