/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import image from '../../static/images/image.png';

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
    border-radius: 58% 42% 58% 42% / 45% 54% 46% 55%;
    border: 10px solid #e8eafe;
  }
`;

export default StyledHeroImage;
