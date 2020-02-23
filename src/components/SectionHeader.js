/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function SectionHeader({ className, children }) {
  return <div className={className}>{children}</div>;
}

const StyledSectionHeader = styled(SectionHeader)`
  text-align: center;

  h2 {
    font-family: 'Poppins';
    font-size: 3.6rem;
    margin-bottom: 10px;
    margin-top: 0;
    padding: 50px 0 0 0;
    color: black;
  }

  p {
    font-size: 1.5rem;
    margin-top: 5px;
    margin-bottom: 30px;
    color: #2e2e2e;
    font-weight: 220;
  }

  @media screen and (max-width: 599px) {
    p {
      font-size: 1.2rem;
      padding: 0 10px;
    }
  }
`;

export default StyledSectionHeader;
