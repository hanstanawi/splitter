import styled from 'styled-components';
import {
  useBillValue,
  usePeopleQuantity,
  useTip,
} from 'hooks/calculator.hooks';
import {
  calculateTipPerPerson,
  calculateTotalPricePerPerson,
} from 'helpers/math.helpers';
import ResetButton from './ResetButton';
import ResultTemplate from './ResultTemplate';

const StyledResultContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  height: 100%;
  width: 50%;
  color: #fff;
  border-radius: 1rem;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .result {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
`;

function ResultContainer() {
  const billValue = useBillValue();
  const tipValue = useTip();
  const peopleQty = usePeopleQuantity();

  const tipPerPerson = calculateTipPerPerson(billValue, tipValue, peopleQty);
  const totalPerPerson = calculateTotalPricePerPerson(
    tipPerPerson,
    billValue,
    peopleQty
  );

  return (
    <StyledResultContainer>
      <div className="result">
        <ResultTemplate value={tipPerPerson} label="Tip Amount" unit="person" />
        <ResultTemplate value={totalPerPerson} label="Total" unit="person" />
      </div>
      <ResetButton />
    </StyledResultContainer>
  );
}

export default ResultContainer;
