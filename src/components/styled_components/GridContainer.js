import styled from 'styled-components';

const GridContainer = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: auto;
  justify-content: space-around;
  padding-inline-start: 0px;
  padding-bottom: 100px;
  margin-bottom: 0;
`;

export default GridContainer;
