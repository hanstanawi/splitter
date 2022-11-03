import styled from 'styled-components';

import { Card } from 'components/ui/Card';
import CalculatorContextProvider from 'context/calculator-context';
import InputForm from './InputForm';
import Result from './Result';

const StyledCalculatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

const CalculatorCard = styled(Card)`
  width: 50rem;
  height: 25rem;
  padding: 2rem;
  display: flex;
  column-gap: 1rem;
`;

function CalculatorContainer() {
  return (
    <StyledCalculatorContainer>
      <CalculatorCard>
        <CalculatorContextProvider>
          {/* INPUTS */}
          <InputForm />
          {/*  RESULT */}
          <Result />
        </CalculatorContextProvider>
      </CalculatorCard>
    </StyledCalculatorContainer>
  );
}

export default CalculatorContainer;
