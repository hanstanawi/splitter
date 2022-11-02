import { Card } from 'components/ui/BaseCard';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

function Calculator() {
  return (
    <CalculatorContainer>
      <Card>
        <div />
      </Card>
    </CalculatorContainer>
  );
}

export default Calculator;
