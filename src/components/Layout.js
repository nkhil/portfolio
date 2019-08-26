/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import GlobalStyles from './styled_components/StyledNormalise';
import StyledNavbar from './styled_components/StyledNavbar';
import StyledBurgerIcon from './styled_components/StyledBurgerIcon';
import Flex from './styled_components/Flex';
import Colours from '../constants/colours';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <GlobalStyles />
      <Flex justifyEnd style={{ backgroundColor: 'black' }}>
        <StyledBurgerIcon handleIsOpen={handleIsOpen} isOpen={isOpen} />
      </Flex>
      <div style={{ backgroundColor: Colours.primaryBlue }}>
        <StyledNavbar isOpen={isOpen} />
      </div>
      {children}
    </>
  );
}
