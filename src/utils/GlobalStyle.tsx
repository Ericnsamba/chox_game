import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #000000;
    font-family: "Space Grotesk", sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  };
  .menuItems {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 10px;
    list-style-type: none;
  }
  a.signleMenuItem {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
}
`;

export default GlobalStyle;