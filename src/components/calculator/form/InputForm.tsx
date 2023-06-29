import styled from 'styled-components';
import TipSelection from '../tip/TipSelection';
import PeopleQuantityInput from './PeopleQuantityInput';
import BillInput from './BillInput';

const StyledInputForm = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  column-gap: 2rem;
  justify-content: space-between;
  padding: 0.75rem 0;

  .bill-input {
    font-size: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGreyCyan};
    position: relative;
  }

  .bill-input .icon {
    position: absolute;
    width: 20px;
    height: 20px;
    object-fit: contain;
    left: 15px;
    top: 2.5rem;
  }
`;

function InputForm() {
  return (
    <StyledInputForm>
      <BillInput />
      <TipSelection />
      <PeopleQuantityInput />
    </StyledInputForm>
  );
}

export default InputForm;
