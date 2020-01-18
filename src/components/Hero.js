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
      <HeroImage />
      <div className="hero-container-strap">
        <h1>Hey, I'm Nikhil</h1>
        <div className="hero-container-strap-paragraph">
          <p>I’m a software developer who loves making things and solving interesting problems.</p>
        </div>
      </div>
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
      margin-left: 25px;

      .hero-container-strap-paragraph {
        width: 300px;
        p {
          font-size: 1.5rem;
          line-height: 1.3;
          color: ${Colours.bodyGrey};
          margin: 5px 0;
        }
      }

      h1 {
        font-size: 4rem;
        color: ${Colours.headlineGrey};
        margin: 0px;
      }
    }
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    min-height: 100vh;

    .hero-container {
      flex-direction: column;
      max-width: 100%;

      .hero-container-strap {
        margin: 20px 0 0 0;

        h1 {
          font-size: 3rem;
          text-align: center;
        }
        .hero-container-strap-paragraph {
          width: 300px;
          margin-left: 0;
          p {
            text-align: center;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

export default StyledHero;
