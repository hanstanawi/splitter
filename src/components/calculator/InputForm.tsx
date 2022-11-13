import styled from 'styled-components';
import { ChangeEvent, useState } from 'react';

import {
  useBillValue,
  useContextDispatch,
  usePeopleQuantity,
} from 'hooks/calculator.hooks';
import Input from 'components/ui/Input';
import { validateIsValidNumber } from 'helpers/string.helpers';
import TipSelection from './tip/TipSelection';

const StyledInputForm = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem 0;

  .bill-input {
    font-size: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.greyCyan};
  }
`;

function BillInput() {
  const billValue = useBillValue();
  const dispatch = useContextDispatch();
  const billValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const isValidNumber = validateIsValidNumber(inputText);
    if (isValidNumber) {
      dispatch({
        type: 'SET_BILL_VALUE',
        payload: Number(inputText),
      });
    }
  };

  return (
    <div className="bill-input">
      <label htmlFor="bill">Bill</label>
      <Input
        type="text"
        name="bill"
        value={billValue}
        onChange={billValueChangeHandler}
      />
    </div>
  );
}

function PeopleQuantityInput() {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useContextDispatch();
  const peopleQuantity = usePeopleQuantity();

  const peopleQuantityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const isValidNumber = validateIsValidNumber(inputText);
    if (isValidNumber) {
      const numberInput = Number(e.target.value);
      if (numberInput > 0) {
        dispatch({
          type: 'SET_PEOPLE_QUANTITY',
          payload: numberInput,
        });
        setError(null);
      } else {
        dispatch({
          type: 'SET_PEOPLE_QUANTITY',
          payload: numberInput,
        });
        setError(`Can't be zero`);
      }
    }
  };

  return (
    <div className="bill-input">
      <label htmlFor="bill">Number of People</label>
      {error && <p>{error}</p>}
      <Input
        type="text"
        name="people"
        onChange={peopleQuantityChangeHandler}
        value={peopleQuantity}
      />
    </div>
  );
}

function InputForm() {
  return (
    <StyledInputForm>
      {/* Bill Input */}
      <BillInput />
      {/* Tip Selection */}
      <TipSelection />
      {/* Number of People */}
      <PeopleQuantityInput />
    </StyledInputForm>
  );
}

export default InputForm;
