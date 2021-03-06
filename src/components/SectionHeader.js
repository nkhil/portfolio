/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function SectionHeader({ className, children }) {
  return <div className={className}>{children}</div>;
}

const StyledSectionHeader = styled(SectionHeader)`
  text-align: center;
  margin-top: ${props => (props.marginTop ? props.marginTop : '100px')};

  h2 {
    font-family: 'IBM Plex Sans';
    font-weight: 700;
    font-size: 3.6rem;
    margin-bottom: 10px;
    margin-top: 0;
    color: black;
  }

  p {
    font-family: 'IBM Plex Sans';
    font-size: 1.8rem;
    margin-top: 5px;
    margin-bottom: 30px;
    color: black;
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
