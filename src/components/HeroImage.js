/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import image from '../../static/images/image.png';
import colours from '../constants/colours';

function HeroImage({ className }) {
  return (
    <div className={className}>
      <img src={image} alt="nikhil vijayan" />
    </div>
  );
}

const StyledHeroImage = styled(HeroImage)`
  align-self: center;
  max-width: 100%;
  height: auto;

  img {
    width: 180px;
    border-radius: 50%;
    border: 10px solid black;
  }
`;

export default StyledHeroImage;
