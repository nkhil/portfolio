/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import GlobalStyles from './styled_components/StyledNormalise';
import StyledNavbar from './styled_components/StyledNavbar';
import StyledBurgerIcon from './styled_components/StyledBurgerIcon';
import Flex from './styled_components/Flex';

export default function Layout({ children, backgroundColor, navlinkColor, navbarWidth }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <GlobalStyles />
      <Flex justifyEnd style={{ backgroundColor }}>
        <StyledBurgerIcon handleIsOpen={handleIsOpen} isOpen={isOpen} colour={navlinkColor} />
      </Flex>
      <div style={{ backgroundColor }}>
        <StyledNavbar
          width={navbarWidth}
          isOpen={isOpen}
          backgroundColor={backgroundColor}
          navlinkColor={navlinkColor}
        />
      </div>
      {children}
    </>
  );
}
