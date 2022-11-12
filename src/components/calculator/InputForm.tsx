import styled from 'styled-components';
import { ChangeEvent } from 'react';

import { useContextDispatch } from 'hooks/calculator.hooks';
import Input from 'components/ui/Input';
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
  const dispatch = useContextDispatch();
  const billValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_BILL_VALUE',
      payload: Number(e.target.value),
    });
  };

  return (
    <div className="bill-input">
      <label htmlFor="bill">Bill</label>
      <Input
        type="number"
        name="bill"
        onChange={billValueChangeHandler}
        defaultValue="0"
      />
    </div>
  );
}

function PeopleQuantityInput() {
  const dispatch = useContextDispatch();
  const peopleQuantityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > 0) {
      dispatch({
        type: 'SET_PEOPLE_QUANTITY',
        payload: Number(e.target.value),
      });
    }
  };

  return (
    <div className="bill-input">
      <label htmlFor="bill">Number of People</label>
      <Input
        type="number"
        name="people"
        onChange={peopleQuantityChangeHandler}
        defaultValue={1}
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
