import { useState } from 'react';

import Container from 'components/layout/Container';
import styled from 'styled-components';

const StyledBody = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [count, setCount] = useState(0);

  /**
   * const totalTip = totalPrice * tipPercentage
   * const tipPerPerson = totalTip / totalPeople
   * const totalPricePerPerson = tipPerPerson + (totalPrice / totalPeople)
   */

  return (
    <StyledBody>
      <Container />
    </StyledBody>
  );
}

export default App;
