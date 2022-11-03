import styled from 'styled-components';
import { ChangeEvent } from 'react';

import { useCalculator } from 'hooks/use-calculator';

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

    input {
      background-color: ${({ theme }) => theme.colors.lightGrey};
      border-radius: 0.25rem;
      font-size: 1rem;
      padding: 0.5rem;
      border: none;
      &:hover {
        border: solid;
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

function InputForm() {
  const { dispatch } = useCalculator();
  const billValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_BILL_VALUE', payload: Number(e.target.value) });
  };

  return (
    <StyledInputForm>
      {/* Bill Input */}
      <div className="bill-input">
        <label htmlFor="bill">Bill</label>
        <input
          type="number"
          name="bill"
          onChange={billValueChangeHandler}
          defaultValue={0}
        />
      </div>
      {/* Tip Selection */}
      <div />
      {/* Number of People */}
    </StyledInputForm>
  );
}

export default InputForm;
