import styled from 'styled-components';
import GridItem from '../GridItem';

const StyledGridItem = styled(GridItem)`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Montserrat=swap');

  width: 300px;
  justify-self: center;
  text-align: left;
  /* padding: 20px; */
  background-color: #fff;
  margin: 0.5rem 0;
  position: relative;
  border-radius: 10px;
  /* border: 1px solid rgb(213, 213, 213); */
  box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);

  h2 {
    padding: 10px 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
    line-height: 1;
    text-align: left;
    margin: 20px 0 0px 0;
    color: #2e2e2e;
  }

  p {
    padding: 0px 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    text-align: left;
    line-height: 1.5;
    margin: 0px 0px 20px 0px;
    color: #2e2e2e;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    list-style-type: none;
    background-color: #eee;
    border-radius: 15px;
    margin: 10px 5px;
    padding: 8px;

    &:hover {
      cursor: default;
    }
  }

  img {
    border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid rgb(218, 218, 218);
  }
`;

export default StyledGridItem;
