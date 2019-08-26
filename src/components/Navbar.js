/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import NavItems from '../constants/links';
import Flex from './styled_components/Flex';
import Container from './styled_components/Container';
import Logo from '../../static/images/logo.png';

const StyledImg = styled.img`
  src: url(${props => props.src});
  alt: (${props => props.alt});
  align-self: center;
  flex: 1;
  max-width: 100%;
  height: auto;
  margin-top: ${props => {
    if (props.margin) return props.margin;
    return '0px';
  }};

  @media screen and (max-width: 599px) {
    display: none;
  }
`;

const Div = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 50px;
  margin-right: auto;
`;

export default function Navbar({ className }) {
  return (
    <Container full fullVertical className={className}>
      <Flex justifyEnd>
        <Div>
          <Link to="/">
            <StyledImg src={Logo} alt="Nikhil" style={{ alignContent: 'flex-start' }} />
          </Link>
        </Div>
        <Flex justifyCenter fillAvailable>
          <ul>
            {NavItems.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </Container>
  );
}
