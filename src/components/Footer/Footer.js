/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaCodepen, FaMedium, FaStackOverflow } from 'react-icons/fa';
import width from '../../constants/width';
import FooterIcon from './FooterIcon';
import urls from '../../constants/footer-URLs';

function Footer({ className }) {
  return (
    <div className={className}>
      <div className="footer-container">
        <div className="icons">
          <FooterIcon icon={FaGithub} url={urls.github} />
          <FooterIcon icon={FaLinkedinIn} url={urls.linkedin} />
          <FooterIcon icon={FaMedium} url={urls.medium} />
          <FooterIcon icon={FaCodepen} url={urls.codepen} />
          <FooterIcon icon={FaStackOverflow} url={urls.stackOverflow} />
        </div>
        <p>
          The{' '}
          <a href="https://github.com/nkhil/portfolio.git" target="_blank" rel="noopener noreferrer">
            code for this site
          </a>{' '}
          is available for free under an MIT license.
        </p>
      </div>
    </div>
  );
}

const StyledFooter = styled(Footer)`
  display: flex;
  flex-direction: column;
  background-color: black;
  min-height: 20vh;
  margin-bottom: 0;
  margin-top: 100px;

  .footer-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: ${width.containerWidth};
    padding: 50px;

    p {
      color: white;
      font-size: 1rem;
      font-weight: 200;
      text-align: center;
      line-height: 1.5;

      a {
        color: white;
        border-bottom: 1px solid white;
        text-decoration: none;

        &:hover {
          border-bottom: none;
        }
      }
    }

    .icons {
      display: flex;
      flex-direction: row;
      align-self: center;
      svg {
        margin: 0 8px;
      }
    }

    .icon {
      padding: 0 20px;
    }
  }
`;

export default StyledFooter;
