import {
  useBillValue,
  useContextDispatch,
  usePeopleQuantity,
} from 'hooks/calculator.hooks';
import styled from 'styled-components';

type StyledResetButtonProps = {
  disabled: boolean;
};

const StyledResetButton = styled.button<StyledResetButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.darkPrimary};
  opacity: ${({ disabled }) => {
    return disabled ? '30%' : '100%';
  }};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => {
    return disabled ? 'auto' : 'pointer';
  }};
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  font-family: sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.darkPrimary};
  }
`;

function ResetButton() {
  const billValue = useBillValue();
  const peopleQuantity = usePeopleQuantity();
  const dispatch = useContextDispatch();
  const isDefaultState = !billValue && !peopleQuantity;

  const resetHandler = () => {
    dispatch({ type: 'SET_BILL_VALUE', payload: 0 });
    dispatch({ type: 'SET_TIP_PERCENTAGE', payload: 0 });
    dispatch({ type: 'SET_PEOPLE_QUANTITY', payload: 0 });
  };

  return (
    <StyledResetButton disabled={isDefaultState} onClick={resetHandler}>
      RESET
    </StyledResetButton>
  );
}

export default ResetButton;
