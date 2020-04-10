/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedinIn, FaCodepen, FaMedium, FaStackOverflow } from 'react-icons/fa';
import Emoji from 'a11y-react-emoji';
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
          <FooterIcon icon={FaTwitter} url={urls.twitter} />
          <FooterIcon icon={FaStackOverflow} url={urls.stackOverflow} />
        </div>
        <p>
          Made with <Emoji symbol="♥️" label="love" /> using Gatsby.
        </p>
        <p>
          If you spot any typos or corrections, please feel free to make a{' '}
          <a href="https://github.com/nkhil/portfolio">pull request</a>
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
