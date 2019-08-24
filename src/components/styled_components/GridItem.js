import styled from 'styled-components';
import GridItem from '../GridItem';

const StyledGridItem = styled(GridItem)`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Montserrat=swap');

  width: 250px;
  justify-self: center;
  text-align: left;
  padding: 20px;
  background-color: #fff;
  margin: 0.5rem 0;
  position: relative;
  border-radius: 10px;
  border: 1px solid rgb(213, 213, 213);
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
    line-height: 1;
    text-align: left;
    margin-top: 0;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    text-align: left;
    /* margin: 0px 0 0 10px; */
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    background-color: #eee;
    border-radius: 5px;
    margin: 10px 0;
    padding: 5px;
  }
`;

export default StyledGridItem;
