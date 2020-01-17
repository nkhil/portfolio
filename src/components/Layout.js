/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import GlobalStyles from './styled_components/StyledNormalise';
import Navbar from './Navbar';
import StyledBurgerIcon from './styled_components/StyledBurgerIcon';
import Flex from './styled_components/Flex';

export default function Layout({ children, navlinkColor, navbarWidth }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <GlobalStyles />
      <Flex justifyEnd>
        <StyledBurgerIcon handleIsOpen={handleIsOpen} isOpen={isOpen} />
        <Navbar width={navbarWidth} isOpen={isOpen} navlinkColor={navlinkColor} />
      </Flex>
      {children}
    </>
  );
}
