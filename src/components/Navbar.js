/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import NavItems from '../constants/links';
import Logo from './CssLogo';
import width from '../constants/width';

function Navbar({ className }) {
  return (
    <div className={className}>
      <div className="navbar">
        <Logo />
        <ul>
          {NavItems.map((item, i) => (
            <li key={i}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const StyledNavbar = styled(Navbar)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: auto;
  margin-top: 15px;

  .navbar {
    min-width: ${width.navbarWidth};
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 1rem;
    font-family: 'IBM Plex Sans';
    font-weight: 400;

    a {
      &:hover {
        cursor: pointer;
        color: rgb(44, 75, 255);
      }
    }

    a {
      display: block;
      padding: 20px 20px 10px 20px;
      text-decoration: none;
      text-transform: capitalize;
      color: black;
    }
  }

  @media screen and (max-width: 599px) {
    transition: all 0.2s ease-out;

    ${props => {
    if (props.isOpen) {
      return css`
          opacity: 1;
          height: auto;
        `;
    }
    return css`
        opacity: 0;
        height: 0;
        overflow: hidden;
      `;
  }}

    ul {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      text-align: left;
      margin: 0;
      padding: 0;
    }

    li {
      font-size: 1.8rem;
      width: 100vw;
      display: flex;
      justify-content: center;
    }
  }
`;

export default StyledNavbar;
