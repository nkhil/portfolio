import styled from 'styled-components';
import BurgerIcon from '../BurgerIcon';

const StyledBurgerIcon = styled(BurgerIcon)`
  display: none;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    display: block;
  }
`;

export default StyledBurgerIcon;
