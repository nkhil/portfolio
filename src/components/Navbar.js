/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import NavItems from '../constants/links';
import Logo from './Logo';
import Colours from '../constants/colours';
import width from '../constants/width';

const StyledArrow = styled(MdKeyboardArrowRight)`
  display: none;

  @media screen and (max-width: 599px) {
    display: inline;
    justify-items: flex-end;
  }
`;

function Navbar({ className }) {
  return (
    <div className={className}>
      <div className="navbar">
        <Logo width="50px" />
        <ul>
          {NavItems.map((item, i) => (
            <li key={i}>
              <Link to={item.path}>
                {item.name}
                <StyledArrow />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const StyledNavbar = styled(Navbar)`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: auto;

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
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;

    a {
      &:hover {
        cursor: pointer;
        color: ${Colours.primaryBlue};
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
    transition: all 2s ease-out;

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
      font-size: 1.5rem;
      width: 100vw;
      display: flex;
      justify-content: center;
    }
  }
`;

export default StyledNavbar;
