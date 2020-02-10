/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { AiFillThunderbolt } from 'react-icons/ai';

function NotFound({ className }) {
  return (
    <div className={className}>
      <div className="not-found-box">
        <div className="not-found-box-heading">
          <AiFillThunderbolt size={90} color="#000000" />
          <h1>OOPS!</h1>
          <AiFillThunderbolt size={90} color="#000000" />
        </div>
        <p>
          Sorry, I'm still in the process of building my site, and unfortunately this can lead to pages that don't (yet)
          exist
        </p>
        <p>
          I'd really appreciate it if you could let me know which page broke for you at{' '}
          <a href="https://twitter.com/nkhil" target="_blank" rel="noopener noreferrer">
            @nkhil
          </a>
        </p>
      </div>
    </div>
  );
}

const StyledNotFound = styled(NotFound)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  .not-found-box {
    display: flex;
    flex-direction: column;
    border: 8px solid black;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.75);

    p {
      text-align: center;
      font-weight: 300;
      font-size: 2rem;
      padding: 10px 50px;
      margin: 10px 0;
      line-height: 1.5;

      a {
        color: blue;
        text-decoration: none;

        &:hover {
          border-bottom: 1px solid blue;
        }
      }
    }

    .not-found-box-heading {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      border-bottom: 8px solid black;
      width: 100%;
      justify-content: center;

      h1 {
        font-size: 8rem;
        font-weight: 700;
        margin: 5px;
      }
    }
  }

  @media screen and (max-width: 599px) {

    .not-found-box {
      max-width: 100%;

      p {
        font-size: 1.5rem;
        padding: 10px;
      }

      .not-found-box-heading {
        align-items: baseline;
        h1 {
          font-size: 6rem;
        }
      }
    }
  }
`;

export default StyledNotFound;
