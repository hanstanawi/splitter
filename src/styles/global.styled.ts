import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Space Mono', monospace;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    max-height: 100vh;
    font-size: 24px;
  }
`;

export default GlobalStyle;
