import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    max-height: 100vh;
    font-size: 24px;
    font-family: 'Space Mono', monospace;
  }

  input, textarea, button {font-family: inherit}
`;

export default GlobalStyle;
