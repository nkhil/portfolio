import styled, { css } from 'styled-components';
import Navbar from '../Navbar';

const StyledNavbar = styled(Navbar)`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    &hover: {
      text-decoration: underline;
    }

    a {
      display: block;
      padding: 1rem;
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
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }
`;

export default StyledNavbar;
