import styled from 'styled-components';
import Hero from '../Hero';
import Colours from '../../constants/colours';

const StyledHero = styled(Hero)`
  /* background-image: -webkit-linear-gradient(
      -90deg,
      transparent 0%,
      transparent 50%,
      ${Colours.primaryBlue} 50%,
      ${Colours.primaryBlue} 100%
    ),
    -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 50%, ${Colours.primaryBlue} 50%, ${Colours.primaryBlue}
          50%);
  background-size: 0.25em 0.25em; */
  --dot-bg-color: #656af4;
  --dot-color: #6e72f3;
  background-image: linear-gradient(90deg,var(--dot-bg-color,#f5f7ff) 75%,hsla(0,0%,100%,0) 75%),linear-gradient(180deg,var(--dot-color,rgba(77,93,131,.04)) 5%,hsla(0,0%,100%,0) 26%);
  background-size: 10px 10px;
`;

export default StyledHero;
