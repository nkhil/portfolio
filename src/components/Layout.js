/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import GlobalStyles from './styled_components/StyledNormalise';
import StyledNavbar from './styled_components/StyledNavbar';
import StyledBurgerIcon from './styled_components/StyledBurgerIcon';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <GlobalStyles />
      <StyledBurgerIcon handleIsOpen={handleIsOpen} />
      <StyledNavbar isOpen={isOpen} />
      {children}
    </>
  );
}
