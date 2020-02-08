import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Colours from '../constants/colours';
import width from '../constants/width';


function Footer({ className }) {
  return (
    <div className={className}>
      <div className="footer-container">
        <FaGithub size={22} className="icon" />
        <FaTwitter size={22} className="icon" />
        <FaLinkedinIn size={22} className="icon" />
      </div>
    </div>
  );
}

const StyledFooter = styled(Footer)`
  display: flex;
  flex-direction: column;
  background-color: black;
  min-height: 20vh;

  .footer-container {
    border: 2px solid pink;
    display: flex;
    flex-direction: row;
    margin: auto;
    max-width: ${width.containerWidth};

    .icon {
      padding: 0 20px;
    }
  }
`;

export default StyledFooter;
