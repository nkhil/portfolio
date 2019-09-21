/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import NavItems from '../constants/links';
import Flex from './styled_components/Flex';
import Container from './styled_components/Container';
import Logo from '../../static/images/logo.png';
import Colours from '../constants/colours';

const StyledImg = styled.img`
  src: url(${props => props.src});
  alt: (${props => props.alt});
  flex: 1;
  max-width: 100%;
  height: auto;
  margin-top: ${props => {
    if (props.margin) return props.margin;
    return '0px';
  }};
  margin-left: 100px;

  @media screen and (max-width: 599px) {
    display: none;
  }
`;

const StyledArrow = styled(MdKeyboardArrowRight)`
  display: none;

  @media screen and (max-width: 599px) {
    display: inline;
    justify-items: flex-end;
  }
`;

export default function Navbar({ className, backgroundColor }) {
  return (
    <Container width="850px" full fullVertical backgroundColor={backgroundColor} className={className}>
      <Flex justifyEnd>
        <Flex style={{ marginRight: 'auto' }}>
          <Link to="/">
            <StyledImg src={Logo} alt="Nikhil" style={{ alignContent: 'flex-start' }} margin="15px" />
          </Link>
        </Flex>
        <Flex fillAvailable>
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
        </Flex>
      </Flex>
    </Container>
  );
}
