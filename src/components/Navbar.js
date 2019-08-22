/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import NavItems from '../constants/links';
import Flex from './styled_components/Flex';
import Container from './styled_components/Container';

export default function Navbar({ className }) {
  return (
    <Container fullVertical className={className}>
      <Flex justifyCenter>
        <Flex justifyBetween alignCenter style={{ padding: '1rem 1.25rem' }}>
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
