/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const GridItem = ({ project, index, className }) => {
  const { path, title, description, src } = project;

  return (
    <li key={index} className={className} style={{ listStyleType: 'none' }}>
      <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`${path}`}>
        <div className="icon">
          <img src={src} width="120px" alt={title} />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </li>
  );
};

const StyledGridItem = styled(GridItem)`
  width: 280px;
  justify-self: center;
  text-align: left;
  background-color: #fff;
  margin: 1rem 0;
  position: relative;
  border-radius: 15px;
  border: 1px solid #f8f8f8;
  padding-top: 20px;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    box-shadow: 0px 4px 20px rgba(79, 79, 79, 0.25);
  }

  a {
    &:focus {
      outline: none !important;
    }
  }

  .icon {
    display: ${props => (props.project.src ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    background-color: #e8eafe;
    height: 120px;
    width: 120px;
    -moz-border-radius: 42% 58% 37% 63% / 55% 40% 60% 45%;
    -webkit-border-radius: 42% 58% 37% 63% / 55% 40% 60% 45%;
    border-radius: 42% 58% 37% 63% / 55% 40% 60% 45%;
    align-self: center;
    text-align: center;
    line-height: 100px;
    vertical-align: middle;
    margin: auto;
  }

  h2 {
    font-family: 'IBM Plex Sans';
    padding: 10px 20px 5px 20px;
    font-size: 1.5rem;
    line-height: 1.2;
    text-align: center;
    margin: 20px 0 5px 0;
    color: black;
    font-weight: 700;
  }

  p {
    font-family: 'IBM Plex Sans';
    font-weight: 400;
    padding: 0px 20px;
    font-size: 1.1rem;
    text-align: center;
    line-height: 1.5;
    margin: 0px 0px 20px 0px;
    color: black;
    font-weight: 350;
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
      cursor: pointer;
    }
  }
`;

export default StyledGridItem;
