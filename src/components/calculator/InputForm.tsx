import styled from 'styled-components';
import { ChangeEvent } from 'react';

import { useContextDispatch } from 'hooks/calculator.hooks';
import Input from 'components/ui/Input';

const StyledInputForm = styled.div`
  height: 100%;
  width: 50%;

  .bill-input {
    font-size: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.greyCyan};
  }
`;

function BillInput() {
  const dispatch = useContextDispatch();
  const billValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);
    if (inputValue > 0) {
      dispatch({
        type: 'SET_BILL_VALUE',
        payload: inputValue,
      });
    }
  };

  return (
    <div className="bill-input">
      <label htmlFor="bill">Bill</label>
      <Input
        type="number"
        name="bill"
        onChange={billValueChangeHandler}
        defaultValue={0}
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
      <div />
      {/* Number of People */}
    </StyledInputForm>
  );
}

export default InputForm;
