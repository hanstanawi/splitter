import styled from 'styled-components';

import { CalculatorContextProvider } from 'context/calculator-context';
import { Card } from 'components/ui/Card';
import InputForm from './InputForm';
import ResultContainer from './result/ResultContainer';

const StyledCalculatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

const CalculatorCard = styled(Card)`
  width: 50rem;
  height: 2rem;
  padding: 2rem;
  display: flex;
  column-gap: 2.5rem;
`;

function CalculatorContainer() {
  return (
    <StyledCalculatorContainer>
      <CalculatorCard>
        <CalculatorContextProvider>
          <InputForm />
          <ResultContainer />
        </CalculatorContextProvider>
      </CalculatorCard>
    </StyledCalculatorContainer>
  );
}

export default CalculatorContainer;
