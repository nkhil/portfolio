/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import HeroImage from './HeroImage';
import Colours from '../constants/colours';
import width from '../constants/width';

const Hero = ({ className }) => (
  <div className={className}>
    <div className="hero-container">
      <div className="hero-container-strap">
        <h1>Hey, I'm Nikhil.</h1>
        <div className="hero-container-strap-paragraph">
          <p>I’m a software developer who loves making things and solving interesting problems.</p>
        </div>
      </div>
      <HeroImage />
    </div>
  </div>
);

const StyledHero = styled(Hero)`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  background-color: ${Colours.heroWhite};

  .hero-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    max-width: ${width.containerWidth};

    .hero-container-strap {
      display: flex;
      flex-direction: column;

      .hero-container-strap-paragraph {
        width: 350px;
        p {
          font-size: 1.5rem;
          line-height: 1.3;
          color: ${Colours.bodyGrey};
          margin: 5px;
        }
      }

      h1 {
        font-size: 4rem;
        color: ${Colours.headlineGrey};
        margin: 5px;
      }
    }
  }
`;

export default StyledHero;
