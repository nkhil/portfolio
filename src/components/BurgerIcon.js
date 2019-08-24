/* eslint-disable react/prop-types */
import React from 'react';
import { MdMenu } from 'react-icons/md';
import Flex from './styled_components/Flex';

const BurgerIcon = ({ handleIsOpen, className }) => (
  <Flex className={className}>
    <button type="button" onClick={handleIsOpen}>
    <div style={{color: 'white'}}>
      <MdMenu size={32} />
    </div>
    </button>
  </Flex>
);

export default BurgerIcon;
