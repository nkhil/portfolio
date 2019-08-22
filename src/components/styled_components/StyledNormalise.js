import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  
  ${styledNormalize}

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: #f9fbff;
  }

  html, body {
	height: 100%;
	font-size: 1em;
	background: #fafafa;
	margin: auto;
	box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

  p {
    font-size: 1rem;
  }

  button {
    border: none;
    background-color: inherit;
  }
`;

export default GlobalStyle;
