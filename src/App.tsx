import Calculator from 'components/calculator';
import HeaderTitle from 'components/layout/HeaderTitle';

import { Container } from 'components/layout/Container';
import { ThemeProvider } from 'styled-components';
import { globalTheme } from 'styles/global-theme.styled';
import { GlobalStyles } from 'styles/global.styled';

function App() {
  /**
   * const totalTip = totalPrice * tipPercentage
   * const tipPerPerson = totalTip / totalPeople
   * const totalPricePerPerson = tipPerPerson + (totalPrice / totalPeople)
   */

  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Container>
        <HeaderTitle />
        <Calculator />
      </Container>
    </ThemeProvider>
  );
}

export default App;
