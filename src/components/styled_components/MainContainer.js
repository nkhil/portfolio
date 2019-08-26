import styled from 'styled-components';

const MainContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:700|Montserrat=swap');

  min-height: 60vh;
  color: white;
  padding: 0;
  margin: 0;
  background-color: ${props => props.bgColor};

  h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 5rem;
    margin: 1.5rem 0 0 0;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    text-align: center;
    margin: 10px;
  }

  button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
    background-color: black;
    padding: 10px 15px;
    color: white;
    border-radius: 5px;
    display: inline-block;
    margin-top: 1rem;
    text-decoration: none;
    transition: 0.1s;
    text-align: center;
    margin: 30px 10px;
    cursor: pointer;
    border: none;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 599px) {
    h1 {
      font-size: 3rem;
      text-align: center;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 50px;
    }
  }
`;

export default MainContainer;
