import styled, { css } from 'styled-components';
import BlogPost from '../BlogPost';

const StyledBlogPost = styled(BlogPost)`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  font-family: 'Montserrat', sans-serif;
  text-align: center;

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 3rem;
    margin-bottom: 10px;
    margin-top: 0;
    padding: 50px 0 0 0;
    color: #2e2e2e;
  }
  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    margin-top: 5px;
    margin-bottom: 30px;
    color: #2e2e2e;
    line-height: 1.5;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    list-style-type: none;
    margin: 15px 0;
    font-size: 1.5rem;

    &:hover {
      cursor: default;
    }

    a {
      text-decoration: none;
      color: #2e2e2e;
      border-bottom: 2px solid black;
    }

    span {
      border-radius: 10px;
      padding: 10px 15px;

      &:hover {
        cursor: pointer;
        background-color: #fff;
      }
    }
  }
`;

export default StyledBlogPost;
