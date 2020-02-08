/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaLinkedinIn, FaCodepen } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import Emoji from 'a11y-react-emoji';
import Colours from '../../constants/colours';
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
          <FooterIcon icon={FaCodepen} url={urls.codepen} />
          <FooterIcon icon={FaTwitter} url={urls.twitter} />
        </div>
        <p>
          Made with <Emoji symbol="♥️" label="love" /> using Gatsby.
        </p>
        <p>
          <a href="https://github.com/nkhil/portfolio">Github repo</a>
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
        text-decoration: none;

        &:hover {
          border-bottom: 1px solid white;
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
