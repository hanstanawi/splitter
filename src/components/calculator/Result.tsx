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

const StyledResult = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  height: 100%;
  width: 50%;
  color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
`;

function Result() {
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
    <StyledResult>
      <div>Tip Per Person: {tipPerPerson.toFixed(2)}</div>
      <div>Total Per Person: {totalPerPerson.toFixed(2)}</div>
    </StyledResult>
  );
}

export default Result;
