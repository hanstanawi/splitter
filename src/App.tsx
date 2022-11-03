import { ThemeProvider } from 'styled-components';

import CalculatorContainer from 'components/calculator/CalculatorContainer';
import HeaderTitle from 'components/layout/HeaderTitle';
import globalTheme from 'styles/global-theme.styled';
import GlobalStyles from 'styles/global.styled';

import { Container } from 'components/layout/Layout';

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Container>
        <HeaderTitle />
        <CalculatorContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
