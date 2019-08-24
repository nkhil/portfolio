import styled from 'styled-components';

const StyledImg = styled.img`
  src: url(${props => props.src});
  alt: (${props => props.alt});
  align-self: center;
  flex: 1;
  max-width: 100%;
  height: auto;
  margin-top: ${props => {
    if (props.margin) return props.margin;
    return '10px';
  }};
`;

export default StyledImg;
