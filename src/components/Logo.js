/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../../static/images/logo.png';

function Logo({ className, width }) {
  return (
    <div className={className}>
      <Link to="/">
        <img src={logo} alt="Nikhil" width={width} />
      </Link>
    </div>
  );
}

const StyledLogo = styled(Logo)`
  margin-right: auto;
  padding-left: 50px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
  }
`;

export default StyledLogo;
