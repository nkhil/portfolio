/* eslint-disable react/prop-types */
import React from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import Flex from './styled_components/Flex';

const BurgerIcon = ({ isOpen, handleIsOpen, colour, className }) => (
  <Flex className={className}>
    <button type="button" onClick={handleIsOpen}>
      <div style={{ color: colour ? 'black' : 'white' }}>{!isOpen ? <MdMenu size={35} /> : <MdClose size={35} />}</div>
    </button>
  </Flex>
);

export default BurgerIcon;
